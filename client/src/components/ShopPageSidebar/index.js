import React from "react";
import FilterWidget from "../../shared/FilterWidget";
import CategoriesFilter from "../CategoriesFilter";
import ColorFilter from "../ColorFilter";
import PriceFilter from "../PriceFilter";

function ShopPageSidebar() {
  return (
    <>
      <FilterWidget
        title="filter by categories"
        render={(props) => <CategoriesFilter {...props} />}
      ></FilterWidget>
      <FilterWidget title="filter by price">
        <PriceFilter />
      </FilterWidget>
      <FilterWidget title="color">
        <ColorFilter />
      </FilterWidget>
    </>
  );
}

export default ShopPageSidebar;
