import RouteDisplay from "../components/RouteDisplay";
import OrderList from "../components/lists/OrderList";
import "./Route.css"

const Route = ({route, currentUser}) => {

    return (
        <div>
            <RouteDisplay 
                route={route}
                currentUser={currentUser}
            />
            <OrderList route={route} />
            <footer className="footer">
            <p>&copy; 2024 Help Desk Inc.</p>
            </footer>
        </div>
    );
}

export default Route;