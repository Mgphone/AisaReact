import React from "react";

function SearchByList({ nearestStores, resultMessage, userLocation }) {
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
          <ul>
            {nearestStores.map((store, index) => (
              <li key={index}>
                <p>Name: {store.Name}</p>
                <p>Address: {store.Address}</p>
                <p>Telephone:{store.tel}</p>
                <p>Opening:{store.Opening}</p>
                <p>CLosing:{store.Closing}</p>
                <p>
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
    </>
  );
}

export default SearchByList;
