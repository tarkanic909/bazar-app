import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import FilterWidgetItem from "../../shared/FilterWidget/FilterWidgetItem";

function PriceFilter() {
  const { filterByPrice, changeTitle } = useContext(ProductsContext);
  const prices = [
    [0, 20],
    [20, 40],
    [40, 60],
    [60, 100],
    [100, 300],
  ];
  return (
    <div>
      <ul>
        {prices.map((category, index) => (
          <li key={index}>
            <FilterWidgetItem
              category={{ category: `${category[0]} - ${category[1]} $` }}
              onClick={() => {
                changeTitle.current("shop");
                filterByPrice(category);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceFilter;
