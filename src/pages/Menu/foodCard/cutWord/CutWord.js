import React from "react";

function CutWord({ text, maxLength }) {
  const cutWord =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return <span>{cutWord}</span>;
}

export default CutWord;
