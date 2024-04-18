import {useState } from "react";
import {
  TileLayer,
  MapContainer,
  LayersControl
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import RoutingControl from './RoutingControl'

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const RouteDisplay = ({route}) => {
  if(route){
    console.log(route)
  }
  const [map, setMap] = useState(null);

  if(!route || !route.waypoints) {
    return <p>Map loading</p>
  }




  return (
    <div>
      <MapContainer
        center={route.waypoints[0]}
        zoom={3}
        zoomControl={false}
        style={{ height: "50vh", width: "100%", padding: 0 }}
        whenCreated={setMap}
      >

        <RoutingControl 
          position={'topleft'} 
          waypoints ={route.waypoints}
          color={'#757de8'} 
        />
        
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default RouteDisplay;