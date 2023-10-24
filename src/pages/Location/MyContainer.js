import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import stores from "../../data/store";
import "./location.css";
const MapContainer = () => {
  // const myApikey = process.env.REACT_APP_GOOGLE_API_KEY;
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 51.58918774203421,
    lng: -0.011156935101795029,
  };

  return (
    // <LoadScript googleMapsApiKey={myApikey} />
    <LoadScript
    // googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    >
      <div className="staticmap-container">
        <GoogleMap
          mapContainerStyle={mapStyles}
          // clasName="staticmap-container"
          zoom={11}
          center={defaultCenter}
        >
          {stores.map((item) => (
            <Marker
              key={item.No}
              position={{ lat: item.lat, lng: item.lng }}
              label={{
                text: item.Name + " Asia Villa",
                color: "#e5007e",
                fontWeight: "bold",
                fontSize: "14px",
              }}
              options={{
                className: "markerLabel",
              }}
              onClick={(e) => {
                console.log(item.Name);
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapContainer;
