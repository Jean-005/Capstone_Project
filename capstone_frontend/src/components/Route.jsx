import RouteDisplay from "../components/RouteDisplay";
import OrderList from "../components/lists/OrderList";

const Route = ({currentDriverRoute, currentUser}) => {

    // if(currentDriverRoute.length === 0) {
    //     return <p>Loading</p>
    // }

    return (
        <>
        <RouteDisplay 
            route={currentDriverRoute}
            currentUser={currentUser}
        />
        <OrderList route={currentDriverRoute} />
        </>
    );
}

export default Route;