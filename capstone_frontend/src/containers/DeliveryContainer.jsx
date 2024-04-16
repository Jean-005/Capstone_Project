import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import RouteDisplay from "../components/RouteDisplay";
import Login from "../components/forms/Login";
import OrderList from "../components/lists/OrderList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const DeliveryContainer = () => {
    const [drivers, setDrivers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [routeFeatures, setRouteFeatures] = useState({});
    const [routes, setRoutes] = useState([]);
    const [completedOrders, setCompletedOrders] = useState(false);
    // To Do: Remove this and store in routes
    const [waypointsList, setWaypointsList] = useState([]);

    useEffect(() => {
        fetchDrivers()
        fetchOrders()
        fetchRoutes()
    }, []);

    useEffect(() => {
        if (drivers.length > 0 && orders.length > 0 && Object.keys(routeFeatures).length === 0){
            postRoute()
        }
    }, [drivers, orders]);

    // React Hook useEffect has a missing dependency: 'postRoute'. Either include it or remove the dependency array.

    // Drivers
    const fetchDrivers = async () => {
        const response = await fetch("http://localhost:8080/drivers", {
            method: "GET"
        });
        const driversJson = await response.json();
        setDrivers(driversJson);
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

    const postRoute = async () => {
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
        const response = await fetch(`https://api.geoapify.com/v1/routeplanner?apiKey=${process.env.REACT_APP_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const routesJson = await response.json();
        setRouteFeatures(routesJson);
        const calculatedRoutes = routesJson.features.map((feature) => {
            // [ order1, order2] within one route
            return feature.properties.actions.reduce((reducer1, action) => {
                if(action.type === "pickup"){
                    const filteredOrders = orders.filter((order)=>{if(order.id == action.shipment_id){return order}});
                    return [...reducer1, ...filteredOrders];
                } else{
                    return [...reducer1];
                }

            }, [])
        })

       const calculatedWaypointsList = routesJson.features.map((feature) => {
        return feature.properties.waypoints.map(waypoint => waypoint.location)
       });
       setWaypointsList(calculatedWaypointsList[0]);
    }

    const deliveryRoutes = createBrowserRouter([
        {
            path: "/",
            element:
                <Login />

        },
        {
            path: "/driver",
            element:
                <Navigation />,
            children: [
                {
                    path: "/driver",
                    element:
                        <>
                            <RouteDisplay waypoints={waypointsList} />
                            <OrderList 
                            orders={orders}
                            completedOrders={completedOrders} 
                            setCompletedOrders={setCompletedOrders}/>
                        </>
                },
                {
                    path: "/driver/profile",
                    element:
                        <Profile 
                        drivers={drivers}
                        />
                }
            ]
        }

    ]);

    return (
        <>
            {/* <Navigation />
            <OrderList />
            <Login />
            <Profile />
            // <RouteDisplay /> */}
            <RouterProvider router={deliveryRoutes} />

        </>
    );
}

export default DeliveryContainer;