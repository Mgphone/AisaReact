import React, { useState } from "react";
import ReplaceAddress from "./ReplaceAddress";
import OpenColseTime from "./OpenColseTime";
function SearchByList({ nearestStores, userLocation, resultMessage }) {
  return (
    <>
      {nearestStores.length > 0 ? (
        <div className="result-restaurant">
          {nearestStores.length === 1 ? (
            <p className="resultstorelist">
              {nearestStores.length} Location near your {userLocation}
            </p>
          ) : (
            <p className="resultstorelist">
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
                    {" " + store.distance.toFixed(2)}
                    miles
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    store.lat
                  )},${encodeURIComponent(store.lng)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReplaceAddress address={store.Address} />
                </a>

                <OpenColseTime
                  // open={store.Opening}
                  // close={store.Closing}
                  storeBusiness={store.BuisnessHour}
                />
                {/* <OpenColseTime store={store.BuisnessHour} /> */}
                <p className="telephone ">
                  <a href="tel:{store.tel}" className="no-underline">
                    📞:{store.tel}
                  </a>
                </p>

                <button className="direction_button">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      store.lat
                    )},${encodeURIComponent(store.lng)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    GET DIRECTION
                  </a>
                </button>
                <button className="deliveroo">
                  <a href={store.Link}>
                    <img
                      className="deliveroobutton"
                      src="Photos/deliveroobutton.png"
                      alt="deliveroologo"
                    />
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        resultMessage && (
          <p className="noresult">
            Apologies, we couldn't find any locations near '{userLocation}' that
            meet your search criteria. Please consider adjusting your search or
            exploring our directory
          </p>
        )
      )}
    </>
  );
}

export default SearchByList;
