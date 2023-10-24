import React, { useEffect, useState } from "react";

function MapWithAutoComplete({
  setNearestStores,
  handleUserLocationInput,
  // setAutocomplete,
}) {
  const [autocomplete, setAutocomplete] = useState(null);
  useEffect(() => {
    const inputElement = document.getElementById("autocomplete-input");
    //change for uk only
    const options = {
      types: ["(cities)"],
      componentRestrictions: { country: "uk" },
    };
    console.log(inputElement);
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
      });

      setAutocomplete(autoComplete);
    }
  }, []);
}

export default MapWithAutoComplete;
