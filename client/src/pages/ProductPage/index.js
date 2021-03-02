import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import useFetch from "../../hooks/useFetch";
import FetchError from "../../shared/FetchError";
import Loading from "../../shared/Loading";

function ProductPage() {
  const { id } = useParams();
  const [error, product, isLoading] = useFetch(`/api/products/${id}`);

  return (
    <FetchError error={error}>
      <Loading isLoading={isLoading}>
        <Product product={product} />
      </Loading>
    </FetchError>
  );
}

export default ProductPage;
