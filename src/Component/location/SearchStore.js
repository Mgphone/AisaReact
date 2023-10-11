import React, { useState, useEffect } from "react";
import stores from "../../Services/store";

function SearchStore() {
  const [userLocation, setUserLocation] = useState("");
  const [nearestStores, setNearestStores] = useState([]);
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const api = process.env.REACT_APP_GOOGLE_API_KEY;

  useEffect(() => {
    const inputElement = document.getElementById("autocomplete-input");

    if (inputElement) {
      setNearestStores([]);
      const autoComplete = new window.google.maps.places.Autocomplete(
        inputElement
      );
      autoComplete.addListener("place_changed", () => {
        const place = autoComplete.getPlace();
        setUserLocation(place.formatted_address);
      });
      setAutocomplete(autoComplete);
    }
  }, []);

  const calculateDistanceInMiles = (location1, location2) => {
    const lat1 = location1.lat;
    const lon1 = location1.lng;
    const lat2 = location2.lat;
    const lon2 = location2.lng;

    const R = 6371; // Radius of the Earth in kilometers.
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKilometers = R * c;

    const distanceInMiles = distanceInKilometers * 0.621371;

    return distanceInMiles;
  };
  const handleUserLocationInput = async () => {
    setIsLoading(true);
    setNearestStores([]);

    try {
      const timestamp = new Date().getTime();

      console.log("neareststore" + nearestStores);
      const geoLocationResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${userLocation}&key=${api}&timestamp=${timestamp}`
      );
      if (!geoLocationResponse.ok) {
        throw new Error("Geocoding requested failed");
      }
      const geoCodingData = await geoLocationResponse.json();
      if (geoCodingData.status !== "OK") {
        throw new Error("Gecoding respond not Okay");
      }
      const userCoordinate = geoCodingData.results[0].geometry.location;
      if (!userCoordinate) {
        throw new Error("Invalid address or location not found.");
      }

      setUserCoordinates(userCoordinate);

      if (userCoordinate) {
        const storesWithinRadius = stores.filter((store) => {
          const distance = calculateDistanceInMiles(userCoordinate, {
            lat: store.lat,
            lng: store.lng,
          });
          return distance <= 5; // Stores within 5 miles.
        });

        // Update the nearestStores state with the list of stores within 5 miles.
        storesWithinRadius.sort((a, b) => {
          const distanceA = calculateDistanceInMiles(userCoordinate, {
            lat: a.lat,
            lng: a.lng,
          });
          const distanceB = calculateDistanceInMiles(userCoordinate, {
            lat: b.lat,
            lng: b.lng,
          });
          return distanceA - distanceB;
        });
        setNearestStores(storesWithinRadius);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="searchstore">
      <h1>Find Restaurants Within 5 Miles</h1>
      <input
        type="text"
        placeholder="Your address"
        id="autocomplete-input"
        value={userLocation}
        onChange={(e) => setUserLocation(e.target.value)}
      />
      <button onClick={handleUserLocationInput}>Find</button>
      {isLoading && <p>Loading...</p>}
      {nearestStores.length > 0 ? (
        // Content to display after clicking the button (list of stores, etc.)
        <div className="searchrestaurant">
          <h2>find a nearest restaurant</h2>
          <ul>
            {nearestStores.map((store, index) => (
              <li key={index}>
                <p>Name: {store.Name}</p>
                <p>Address: {store.Address}</p>
                <p>
                  Distance:{" "}
                  {calculateDistanceInMiles(userCoordinates, {
                    lat: store.lat,
                    lng: store.lng,
                  }).toFixed(2)}{" "}
                  miles
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No result within 5miles</p>
      )}
    </div>
  );
}

export default SearchStore;
