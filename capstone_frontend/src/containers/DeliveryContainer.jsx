import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import RouteDisplay from "../components/RouteDisplay";
import Login from "../components/forms/Login";
import OrderList from "../components/lists/OrderList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const DeliveryContainer = () => {

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
            <RouterProvider router={deliveryRoutes}/>
        </>
    );
}

export default DeliveryContainer;