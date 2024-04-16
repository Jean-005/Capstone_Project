import {
    TileLayer,
    MapContainer,
    LayersControl
  } from "react-leaflet";
const RouteDisplay = ({ routes }) => {
    const [map, setMap] = useState(null);
  
    return (
      <>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: "100vh", width: "100%", padding: 0 }}
        whenCreated={map => setMap(map)}
      ></MapContainer>
      </>
    );
  };

export default RouteDisplay;