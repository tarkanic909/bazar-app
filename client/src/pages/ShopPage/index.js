import React, { useContext, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import Products from "../../components/Products";
import SearchedProducts from "../../components/SearchedProducts";
import ShopPageSidebar from "../../components/ShopPageSidebar";
import { ProductsContext } from "../../contexts/ProductsContext";
import usePagination from "../../hooks/usePagination";
import PageTitle from "../../shared/PageTitle";
import Paginatation from "../../shared/Pagination";
import "./index.scss";

function ShopPage() {
  const { products, filteredProducts, title, changeTitle } = useContext(
    ProductsContext
  );
  const itemsPerPage = 9;

  const { currentItems, currentPage, paginate } = usePagination(
    filteredProducts,
    itemsPerPage
  );
  const setTitle = useRef();

  setTitle.current = () => {
    changeTitle("shop");
  };

  useEffect(() => {
    if (products.length === filteredProducts.length) setTitle.current();
  }, [filteredProducts.length, products.length, setTitle]);

  return (
    <div className="shop-page">
      <div className="shop-page__sidebar">
        <ShopPageSidebar />
      </div>
      <div className="shop-page__content">
        <Route path="/shop" exact>
          <PageTitle>{title}</PageTitle>
        </Route>
        <Route path="/shop/search/:searchedProduct">
          <SearchedProducts />
        </Route>
        <Products products={currentItems} />
        <div className="shop-page__pagination">
          {filteredProducts.length > itemsPerPage && (
            <Paginatation
              itemsPerPage={itemsPerPage}
              totalItems={filteredProducts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
