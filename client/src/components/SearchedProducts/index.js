import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";

function SearchedProducts() {
  const { searchProduct, changeTitle } = useContext(ProductsContext);
  const { searchedProduct } = useParams();

  useEffect(() => {
    searchProduct.current(searchedProduct);
    changeTitle.current(`search results: "${searchedProduct}"`);
  }, [searchedProduct, searchProduct, changeTitle]);

  return <></>;
}

export default SearchedProducts;
