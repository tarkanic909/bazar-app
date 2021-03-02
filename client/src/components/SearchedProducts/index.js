import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import PageTitle from "../../shared/PageTitle";

function SearchedProducts() {
  const { searchProduct } = useContext(ProductsContext);
  const { searchedProduct } = useParams();

  useEffect(() => {
    searchProduct.current(searchedProduct);
  }, [searchedProduct, searchProduct]);

  return (
    <>
      <PageTitle>search results: "{searchedProduct}"</PageTitle>
    </>
  );
}

export default SearchedProducts;
