import React, { useState } from "react";

function SearchByList({ nearestStores, userLocation, resultMessage }) {
  const ReplaceAddress = ({ address }) => {
    const parts = address.split(",");
    const firstPart = parts.shift().trim();
    const secondPart = parts[parts.length - 1].trim();
    return (
      <p className="address">
        {firstPart}, {secondPart}
      </p>
    );
  };
  const OpenColseTime = ({ open, close }) => {
    const openSplit = open.split(".");
    const openValue = parseFloat(openSplit[0] * 60) + parseFloat(openSplit[1]);
    const closeSplit = close.split(".");
    const closeValue =
      parseFloat(closeSplit[0] * 60) + parseFloat(closeSplit[1]);
    //const date=new Date()
    const currentTime = new Date().toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    // console.log(currentTime);
    const currentTimeSplit = currentTime.split(":");
    const currentTimeValue =
      parseFloat(currentTimeSplit[0] * 60) + parseFloat(currentTimeSplit[1]);
    // const checkCloseTime = closeValue - currentTimeValue;
    const checkCloseTimeHour = Math.floor((closeValue - currentTimeValue) / 60);
    const checkCLoseTimeMinute = (closeValue - currentTimeValue) % 60;
    const finalCloseTime =
      checkCloseTimeHour.toString().padStart(2, "0") +
      ":" +
      checkCLoseTimeMinute.toString().padStart(2, "0");
    const checkOpenTimeHour = Math.floor((openValue - currentTimeValue) / 60);
    const checkOpenTimeMinute = (openValue - currentTimeValue) % 60;

    const finalOpenTime =
      checkOpenTimeHour.toString().padStart(2, "0") +
      ":" +
      checkOpenTimeMinute.toString().padStart(2, "0");

    return (
      <div>
        {currentTimeValue >= openValue && currentTimeValue <= closeValue ? (
          <>
            {" "}
            <span className="openclose">Open Now</span>
            <span>Close in {finalCloseTime}</span>
          </>
        ) : (
          <>
            <span className="openclose">Close </span>
            <span>Open in {finalOpenTime}</span>
          </>
        )}
      </div>
    );
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

                <OpenColseTime open={store.Opening} close={store.Closing} />
                <p className="telephone">
                  📞:<a href="tel:{store.tel}">{store.tel}</a>
                </p>

                <button className="direction_button">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      store.lat
                    )},${encodeURIComponent(store.lng)}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
