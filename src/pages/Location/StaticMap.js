import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function StaticMap({ locations }) {
  const defaultCenter = {
    lat: 51.5074, // London's latitude
    lng: -0.1878, // London's longitude
  };

  return (
    <>
      Test
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        {/* <LoadScript> */}
        <GoogleMap
          className="staticmap-container"
          center={defaultCenter}
        ></GoogleMap>
      </LoadScript>
    </>
  );
}

export default StaticMap;
