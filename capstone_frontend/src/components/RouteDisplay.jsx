import { useState } from "react";
import {
  TileLayer,
  MapContainer,
  LayersControl
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import RoutingControl from './RoutingControl'


// merge conflict fix
const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const RouteDisplay = ({route}) => {
  const [map, setMap] = useState(null);

  if(route.waypoints.length === 0) {
    return <p>Map loading</p>
  }

  return (
    <div>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: "50vh", width: "100%", padding: 0 }}
        whenCreated={map => setMap(map)}
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