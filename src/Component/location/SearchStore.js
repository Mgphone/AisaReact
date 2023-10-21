import React, { useState, useEffect } from "react";
import stores from "../../data/store";
import SearchByList from "./SearchByList";
import { BsSearch } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

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
    //change for uk only
    const options = {
      types: ["(cities)"],
      componentRestrictions: { country: "uk" },
    };
    if (inputElement) {
      setNearestStores([]);
      const autoComplete = new window.google.maps.places.Autocomplete(
        inputElement,
        options
      );
      autoComplete.addListener("place_changed", () => {
        const place = autoComplete.getPlace();
        if (place && place.formatted_address) {
          handleUserLocationInput(place.formatted_address);
        }
        // setUserLocation(place.formatted_address);

        // updateResult(place.formatted_address);
      });

      setAutocomplete(autoComplete);
      // handleUserLocationInput(userLocation);
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
  const handleUserLocationInput = async (location) => {
    console.log("this is handle function" + location);
    setIsLoading(true);
    setNearestStores([]);
    try {
      const timestamp = new Date().getTime();

      const geoLocationResponse = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${api}&timestamp=${timestamp}`
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
      if (geoCodingData.status === "OK") {
        const nearestArea = geoCodingData.results[0].formatted_address;
        setUserLocation(nearestArea);
      }
      setUserCoordinates(userCoordinate);
      if (userCoordinate) {
        // const storesWithinRadius = stores.map((store) => {
        //   const distance = calculateDistanceInMiles(userCoordinate, {
        //     lat: store.lat,
        //     lng: store.lng,
        //   });
        //   if (distance <= 5) {
        //     return {
        //       ...store,
        //       distance,
        //     };
        //   }
        //   return null;
        // });
        // const newStore = storesWithinRadius.filter((store) => store !== null);
        // newStore.sort((a, b) => a.distance - b.distance);
        const storesWithinRadius = stores.reduce((acu, store) => {
          const distance = calculateDistanceInMiles(userCoordinate, {
            lat: store.lat,
            lng: store.lng,
          });
          if (distance <= 5) {
            acu.push({
              ...store,
              distance,
            });
          }
          return acu;
        }, []);
        storesWithinRadius.sort((a, b) => a.distance - b.distance);
        setNearestStores(storesWithinRadius);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    if (nearestStores.length === 0) {
      setResultMessage(true);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // setUserLocation(e.target.value);
      let location = e.target.value;
      e.preventDefault();

      handleUserLocationInput(location);
    }
  };
  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const newLocation = `${latitude}, ${longitude}`;
        handleUserLocationInput(newLocation);
        setUserLocation(newLocation);
      });
    }
  };
  return (
    <div className="searchcontainer">
      <h1>FIND YOUR NEAREST ASIA VILLA</h1>
      <div className="searchsticky">
        <input
          type="text"
          placeholder="Plese Enter Your Place"
          id="autocomplete-input"
          value={userLocation}
          onChange={(e) => setUserLocation(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="buttonsearch"
          onClick={() => handleUserLocationInput(userLocation)}
        >
          {/* 🔍 */}
          <BsSearch />
        </button>

        <button onClick={getUserLocation}>
          <BiCurrentLocation />
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      <SearchByList
        nearestStores={nearestStores}
        resultMessage={resultMessage}
        userLocation={userLocation}
        userCoordinate={userCoordinates}
      />
    </div>
  );
}

export default SearchStore;
