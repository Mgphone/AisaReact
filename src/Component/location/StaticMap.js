import React from "react";

function StaticMap({ locations }) {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const zoom = 10;
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?zoom=${zoom}&maptype=roadmap&size=500x300&scale=2&${locations
    .map((loc) => `markers=label:${loc.Name.charAt(0)}|${loc.lat},${loc.lng}`)
    .join("&")}&key=${apiKey}`;

  return (
    <div className="staticMap">
      <img src={mapUrl} alt="static Map" />
    </div>
  );
}

export default StaticMap;
