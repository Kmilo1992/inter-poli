// src/pages/Mapa.jsx

// AIzaSyAX3O7i0igiwyGbK4qmLTXWDTs1sQJXDyQ

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { getAlerts } from "../services/alerts";

export default function Mapa() {
  const [alerts, setAlerts] = useState([]);

  const center = { lat: 4.711, lng: -74.0721 };
  const containerStyle = { width: "100%", height: "500px" };

  useEffect(() => {
    async function fetchAlerts() {
      const data = await getAlerts();
      setAlerts(data);
    }
    fetchAlerts();
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAX3O7i0igiwyGbK4qmLTXWDTs1sQJXDyQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {alerts.map(alert => (
          <Marker key={alert.id} position={{ lat: alert.lat, lng: alert.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
