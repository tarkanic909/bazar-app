import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
import "./index.scss";

function FilterWidgetSubitem({ subcategory }) {
  const { filterByCategory, changeTitle } = useContext(ProductsContext);
  return (
    <span
      className="filter-widget-subitem"
      onClick={() => {
        changeTitle(subcategory);
        filterByCategory(subcategory);
      }}
    >
      {subcategory}
    </span>
  );
}

export default FilterWidgetSubitem;
