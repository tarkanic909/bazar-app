import React from "react";
import ColorFilterItem from "./ColorFilterItem";
import "./index.scss";

function ColorFilter() {
  const colors = [
    "#000",
    "#598fbf",
    "#2459b5",
    "#81d742",
    "#e28f12",
    "#dd3333",
  ];

  return (
    <ul className="color-filter">
      {colors.map((color) => (
        <ColorFilterItem key={color} color={color} />
      ))}
    </ul>
  );
}

export default ColorFilter;
