import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import Login from "../components/forms/Login";
import Help from "../components/Help";
import RouteDisplay from "../components/RouteDisplay";
import OrderList from "../components/lists/OrderList";
import Route from "../components/Route";


const DeliveryContainer = () => {
    const [drivers, setDrivers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [routes, setRoutes] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentDriverRoute, setCurrentDriverRoute] = useState(null);


    // Use Effect hooks
    // Fetch the drivers and orders first
    useEffect(() => {
        fetchDrivers()
        fetchOrders()
        // fetchRoutes() // Not really needed now
    }, []);

    // Then fetch the best routes from the geoApify api
    useEffect(() => {
        // Only fetch if drivers and orders are populated. Also no need to fetch more than once
        if (drivers.length > 0 && orders.length > 0 && !routes && currentUser !== null) {
            fetchBestRoutes();
        }
    }, [drivers, orders, currentUser]);

    useEffect(() => {
        if (routes.length > 0 && currentUser !== null) {
            handleRouteSelection();
        }
    }, [routes])


    // Fetching & Posting
    // Drivers
    const fetchDrivers = async () => {
        const response = await fetch("http://localhost:8080/drivers", {
            method: "GET"
        });
        const driversJson = await response.json();
        setDrivers(driversJson);
    }

    const addNewDriver = async (driver) => {
        const response = await fetch("http://localhost:8080/drivers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(driver)
        });
        const driversJson = await response.json();
        setDrivers([...drivers, driversJson]);
    }

    const handleUserLogin = (user) => {
        setCurrentUser(user)
    }

    // Orders
    const fetchOrders = async () => {
        const response = await fetch("http://localhost:8080/orders", {
            method: "GET"
        });
        const ordersJson = await response.json();
        setOrders(ordersJson);
    }

    // Routes
    const fetchRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes", {
            method: "GET"
        });
        const routesJson = await response.json();
        setRoutes(routesJson);
    }

    const addNewRoute = async (routeDTO) => {
        const response = await fetch("http://localhost:8080/routes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(routeDTO)
        });
        const routeJSON = await response.json();
        return routeJSON;
    }

    
    // Geoapify
    // Fetch the optimised routes given an array of drivers and orders
    const fetchFromGeoApify = async () => {
        const agents = drivers.map((driver) => {
            return {
                "start_location": driver.startLocation,
                "time_windows": [[0, 7200]]
            }
        });
        const shipments = orders.map((order) => {
            return {
                "id": order.id.toString(),
                "pickup": {
                    "location_index": 0,
                    "duration": 120
                },
                "delivery": {
                    "location": order.deliveryGeocode,
                    "duration": 120
                }
            }
        })
        const body = {
            "mode": "drive",
            "agents": agents,
            "shipments": shipments,
            "locations": [
                {
                    "id": "Buckingham Palace",
                    "location": [-0.140634, 51.501476]
                }
            ]
        };
        const response = await fetch(
            `https://api.geoapify.com/v1/routeplanner?apiKey=${process.env.REACT_APP_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        );
        const responseJson = await response.json();
        return responseJson;
    }

    // Returns a list of route objects
    const fetchBestRoutes = async () => {
        const responseJson = await fetchFromGeoApify();
        const calculatedRouteObjects = responseJson.features.map((feature) => {
            const waypoints = feature.properties.waypoints;
            const actions = feature.properties.actions;

            // Getting all locations
            let routeWaypoints = [];
            for (let i = 0; i < waypoints.length; i++) {
                const waypoint = waypoints[i];
                routeWaypoints.push(waypoint.location);
            }
            // Getting all orders
            let routeOrders = [];
            for (let i = 0; i < actions.length; i++) {
                const action = actions[i];
                // Goes through each action and
                if (action.type === "pickup") {
                    routeOrders.push(
                        orders.find(
                            order => order.id === parseInt(action.shipment_id)
                        )
                    )
                }
            }
            // Getting driver
            let driver = drivers[feature.properties.agent_index]; // assume order is same ??
            // Getting duration
            let duration = feature.properties.time;
            // Getting  distance
            let distance = feature.properties.distance;

            // Combine them into a route object
            const routeObject = {
                orders: routeOrders,
                // We can calculate this using order pickup and drop off locations and driver start location
                waypoints: routeWaypoints, // stays for now, remove later on or we can add it to backend.
                driver: driver,
                distance: distance,
                duration: duration
            }
            return routeObject
        });
        setRoutes(calculatedRouteObjects);
        const responses = calculatedRouteObjects.map((route)=> {
            const orderIds = route.orders.map((order)=>{return order.id})
            const routeDTO = {
                orderIds: orderIds,
                driverId: route.driver.id,
                distance: route.distance,
                duration: route.duration
            }
            return addNewRoute(routeDTO);
        })
    }

    const handleRouteSelection = () => {
        routes.map((route) => {
            if (route.driver.id === currentUser.id) {
                setCurrentDriverRoute(route)
            }
        })
    }

    useEffect(()=> {
        if(routes && currentUser !== null){
            handleRouteSelection();
        }
    }, [routes, currentUser])

    // React routing
    const deliveryRoutes = createBrowserRouter([
        {
            path: "/",
            element:
                <Login
                    drivers={drivers}
                    handleUserLogin={handleUserLogin}
                    addNewDriver={addNewDriver}
                />
        },
        {
            path: "/driver",
            element:
                <Navigation currentUser={currentUser} />,
            children: [
                {
                    path: "/driver",
                    element:

                        !routes ?
                            <p>Loading routes...</p>
                            :
                            <>
                                <RouteDisplay
                                    route={currentDriverRoute}
                                    currentUser={currentUser}
                                />
                                <OrderList route={currentDriverRoute} />
                            </>
                },
                {
                    path: "/driver/profile",
                    element:
                        <Profile
                            driver={currentUser}
                            currentUser={currentUser}
                        />
                },
                {
                    path: "/driver/help",
                    element: <Help currentUser={currentUser} />
                },
            ]
        }
    ]);

    return <RouterProvider router={deliveryRoutes} />;
}

export default DeliveryContainer;