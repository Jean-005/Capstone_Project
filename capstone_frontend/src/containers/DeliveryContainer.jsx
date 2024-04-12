import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import RouteDisplay from "../components/RouteDisplay";
import Login from "../components/forms/Login";
import OrderList from "../components/lists/OrderList";

const DeliveryContainer = () => {
    return (
        <>
            <p>Delivery Container</p>
            <Navigation />
            <OrderList />
            <Login />
            <Profile />
            <RouteDisplay />
        </>
    );
}

export default DeliveryContainer;