import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import RouteDisplay from "../components/RouteDisplay";
import Login from "../components/forms/Login";
import OrderList from "../components/lists/OrderList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const DeliveryContainer = () => {

    // Drivers
    const fetchDrivers = async () => {
        const response = await fetch("http://localhost:8080/drivers", {
            method: "GET"
        });
        const driversJson = await response.json();
        return driversJson;
    }
    // tests:
    // fetchDrivers().then((data) => console.log(data))

    // Orders
    const fetchOrders = async() => {
        const response = await fetch("http://localhost:8080/orders", {
            method: "GET"
        });
        const ordersJson = await response.json();
        return ordersJson;
    }
    // fetchOrders().then((data) => console.log(data))
    
    const fetchRoutes = async() => {
        const response = await fetch("http://localhost:8080/routes", {
            method: "GET"
        });
        const routesJson = await response.json();
        return routesJson;
    }
    // fetchRoutes().then((data) => console.log(data))


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
                    <RouteDisplay/>
                },
                {
                    path: "/driver/profile",
                    element:
                    <Profile/>
                }
            ]
        }

    ]);

    return (
        <>
            <p>Delivery Container</p>
            {/* <Navigation />
            <OrderList />
            <Login />
            <Profile />
            // <RouteDisplay /> */}
            <RouterProvider router={deliveryRoutes}/>
        </>
    );
}

export default DeliveryContainer;