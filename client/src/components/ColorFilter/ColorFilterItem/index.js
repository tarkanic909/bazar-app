import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
import "./index.scss";

function ColorFilterItem({ color }) {
  const { filterByColor, changeTitle } = useContext(ProductsContext);
  return (
    <li
      className="color-filter-item"
      onClick={() => {
        changeTitle.current("shop");
        filterByColor(color);
      }}
      style={{ backgroundColor: color }}
    ></li>
  );
}

export default ColorFilterItem;
