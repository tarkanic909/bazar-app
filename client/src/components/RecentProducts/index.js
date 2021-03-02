import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductItem from "../../shared/ProductItem";
import Loading from "../../shared/Loading";
// import ProductsList from "../../shared/ProductsList";
import "./index.scss";

function RecentProducts() {
  const { errorProducts, isLoadingProducts, products } = useContext(
    ProductsContext
  );
  const recentProducts = products.filter((product, index) => {
    return index >= products.length - 8;
  });

  const isLoading = (
    <Loading isLoading={isLoadingProducts}>
      <div className="recent-products">
        {recentProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {/* <ProductsList products={recentProducts} /> */}
    </Loading>
  );
  return (
    <div>{(errorProducts.message && errorProducts.message) || isLoading}</div>
  );
}

export default RecentProducts;
