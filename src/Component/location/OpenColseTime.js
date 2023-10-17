import React, { useEffect, useState } from "react";

function OpenColseTime({ storeBusiness }) {
  const [buisnessHourOpen, setBusinessHourOpen] = useState("");
  const [buisnessHourCLose, setBusinessHourClose] = useState("");
  const dateNote = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayDay = dateNote[new Date().getDay()];
  if (!buisnessHourOpen && !buisnessHourCLose) {
    for (const hour of storeBusiness) {
      if (hour.days.includes(todayDay)) {
        setBusinessHourOpen(hour.Opening);
        setBusinessHourClose(hour.Closing);
        break;
      }
    }
  }

  const openSplit = buisnessHourOpen.split(".");
  const openValue = parseFloat(openSplit[0] * 60) + parseFloat(openSplit[1]);
  const closeSplit = buisnessHourCLose.split(".");
  const closeValue = parseFloat(closeSplit[0] * 60) + parseFloat(closeSplit[1]);
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
}

export default OpenColseTime;
