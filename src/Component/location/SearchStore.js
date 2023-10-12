import React, { useState, useEffect } from "react";
import stores from "../../Services/store";

function SearchStore() {
  const [userLocation, setUserLocation] = useState("");
  const [nearestStores, setNearestStores] = useState([]);
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const [resultMessage, setResultMessage] = useState(false);
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
        const storesWithinRadius = stores.map((store) => {
          const distance = calculateDistanceInMiles(userCoordinate, {
            lat: store.lat,
            lng: store.lng,
          });
          if (distance <= 5) {
            return {
              ...store,
              distance,
            };
          }
          return null;
        });
        const newStore = storesWithinRadius.filter((store) => store !== null);
        newStore.sort((a, b) => a.distance - b.distance);

        setNearestStores(newStore);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    if (nearestStores.length === 0) {
      setResultMessage(false);
    }
  };

  return (
    <div className="searchcontainer">
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
                  {/* Distance:{" "}
                  {calculateDistanceInMiles(userCoordinates, {
                    lat: store.lat,
                    lng: store.lng,
                  }).toFixed(2)}{" "} */}
                  Distance:{" " + store.distance.toFixed(2)}
                  miles
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        resultMessage && <p>No result within 5 miles</p>
      )}
    </div>
  );
}

export default SearchStore;
