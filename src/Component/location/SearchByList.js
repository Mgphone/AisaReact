import React, { useState } from "react";

function SearchByList({ nearestStores, userLocation, resultMessage }) {
  const ReplaceAddress = ({ address }) => {
    const parts = address.split(",");
    const firstPart = parts.shift().trim();
    const secondPart = parts[parts.length - 1].trim();
    return firstPart + ", " + secondPart;
  };
  return (
    <>
      {nearestStores.length > 0 ? (
        <div className="result-restaurant">
          {nearestStores.length === 1 ? (
            <p>
              {nearestStores.length} Location near your {userLocation}
            </p>
          ) : (
            <p>
              {nearestStores.length} Locations near your {userLocation}
            </p>
          )}

          <hr />
          <div className="storecards">
            {nearestStores.map((store, index) => (
              <div className="storecard" key={index}>
                <div className="storecard-header">
                  <h1>
                    {index + 1}.{store.Name}
                  </h1>
                  <p className="distance">
                    Distance:{" " + store.distance.toFixed(2)}
                    miles
                  </p>
                </div>
                <p className="address">
                  <ReplaceAddress address={store.Address} />
                </p>

                <p className="telephone">Telephone:{store.tel}</p>
                <p className="opening">Opening:{store.Opening}</p>
                <p className="closing">CLosing:{store.Closing}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        resultMessage && <p>No result within 5 miles</p>
      )}
    </>
  );
}

export default SearchByList;
