import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import FetchError from "../../shared/FetchError";
import Loading from "../../shared/Loading";
import ProductItem from "../../shared/ProductItem";
import "./index.scss";

function Products({ products }) {
  const { errorProducts, isLoadingProducts } = useContext(ProductsContext);
  return (
    <>
      <FetchError error={errorProducts}>
        <Loading isLoading={isLoadingProducts}>
          <div className="products">
            {products.length
              ? products.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
              : "No products were found matching your selection."}
          </div>
        </Loading>
      </FetchError>
    </>
  );
}

export default Products;
