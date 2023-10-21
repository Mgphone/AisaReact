import React from "react";

function ReplaceAddress({ address }) {
  const parts = address.split(",");
  const firstPart = parts.shift().trim();
  const secondPart = parts[parts.length - 1].trim();
  return (
    <p className="address">
      {firstPart}, {secondPart}
    </p>
  );
}

export default ReplaceAddress;
