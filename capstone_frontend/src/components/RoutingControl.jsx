import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// https://gist.github.com/arjunghimire/82641d7e30ec990432510878d1974a93
// https://www.liedman.net/leaflet-routing-machine/api/#routingcontroloptions

const createRoutineMachineLayer = ({ position, waypoints, color }) => {
    const icon = L.icon({
        iconUrl:
            "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
        iconSize: [40, 40]
    });

    const instance = L.Routing.control({
        position,
        waypoints: waypoints.map((location) => [location[1], location[0]]),
        lineOptions: {
            styles: [
                {
                    color,
                },
            ],
        },
        plan: L.Routing.plan(waypoints.map(w => L.latLng(w[1], w[0])), {
            createMarker: (waypointIndex, waypoint) => {
                return L.marker(waypoint.latLng, {
                    draggable: false,
                    icon: icon
                })
            }
        })
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;