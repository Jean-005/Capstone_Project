import React, { useEffect, useState, useRef } from "react";
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

const RouteDisplay = ({routes}) => {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([38.9072, -77.0369])
  const [end, setEnd] = useState([37.7749, -122.4194])
  let waypoints =[];
  if(routes.length > 0) {
    waypoints = routes.map((order)=> {
      return order.deliveryGeocode;
    })
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
          waypoints ={waypoints}
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