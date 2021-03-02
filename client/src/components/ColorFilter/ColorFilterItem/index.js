import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
import "./index.scss";

function ColorFilterItem({ color }) {
  const { filterByColor } = useContext(ProductsContext);
  return (
    <li
      className="color-filter-item"
      onClick={() => {
        filterByColor(color);
      }}
      style={{ backgroundColor: color }}
    ></li>
  );
}

export default ColorFilterItem;
