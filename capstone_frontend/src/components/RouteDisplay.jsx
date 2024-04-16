import React, { useEffect, useState, useRef } from "react";
import {
  TileLayer,
  MapContainer,
  LayersControl
} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const RouteDisplay = () => {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([38.9072, -77.0369])
  const [end, setEnd] = useState([37.7749, -122.4194])

  return (
    <div>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: "50vh", width: "100%", padding: 0 }}
        whenCreated={map => setMap(map)}
      >
        {/* *************** */}
        {/* Pass in our custom control layer here, inside of the map container */}
        {/* *************** */}
        
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