import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({ position, waypoints, color }) => {
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
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;