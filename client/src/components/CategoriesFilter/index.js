import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import useFetch from "../../hooks/useFetch";
import FilterWidgetItem from "../../shared/FilterWidget/FilterWidgetItem";
import Loading from "../../shared/Loading";

function CategoriesFilter({ setContent }) {
  const [error, categories, isLoading] = useFetch("/api/categories");
  const { filterByCategory, changeTitle } = useContext(ProductsContext);

  useEffect(() => {
    setContent(categories);
  }, [categories, setContent]);

  return (
    <div>
      {(error.message && error.message) || (
        <Loading isLoading={isLoading}>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <FilterWidgetItem
                  category={category}
                  subcategories={category.subcategories}
                  onClick={() => {
                    changeTitle(category.category);
                    filterByCategory(category.category);
                  }}
                />
              </li>
            ))}
          </ul>
        </Loading>
      )}
    </div>
  );
}

export default CategoriesFilter;
