import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const MapContainer = ({ mapCenter }) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={14}>
      <>
        <Marker position={mapCenter} animation="drop" />
      </>
    </GoogleMap>
  );
};

export default MapContainer;
