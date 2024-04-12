import Profile from "../components/Profile";
import RouteDisplay from "../components/RouteDisplay";
import Login from "../components/forms/Login";
import OrderList from "../components/lists/OrderList";

const DeliveryContainer = () => {
    return (
        <>
            <p>Delivery Container</p>
            <OrderList />
            <Login />
            <Profile />
            <RouteDisplay />
        </>
    );
}

export default DeliveryContainer;