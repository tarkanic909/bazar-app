import React, { createContext, useEffect, useReducer, useRef } from "react";
import fetchApi from "../../services/fetchApi";
import actions from "./actions";
import productsReducer from "./productsReducer";

const initialState = {
  isLoadingProducts: false,
  isLoadingCategories: false,
  errorProducts: {},
  error: {},
  products: [],
  filteredProducts: [],
  categories: [],
  title: "Shop",
};

export const ProductsContext = createContext(initialState);

function ProductsContextProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const searchProduct = useRef(() => {});

  function filterByCategory(category) {
    dispatch({
      type: actions.FILTER_BY_CATEGORY,
      payload: category,
    });
  }

  function setFilteredProducts() {
    dispatch({ type: actions.SET_FILTERED_PRODUCTS, payload: null });
  }

  function filterByPrice(range) {
    dispatch({ type: actions.FILTER_BY_PRICE, payload: range });
  }

  function filterByColor(color) {
    dispatch({ type: actions.FILTER_BY_COLOR, payload: color });
  }

  searchProduct.current = (product) => {
    dispatch({ type: actions.SEARCH_PRODUCT, payload: product });
  };

  const changeTitle = useRef();

  changeTitle.current = (title) => {
    dispatch({ type: actions.CHANGE_TITLE, payload: title });
  };

  useEffect(() => {
    dispatch({ type: actions.LOADING_PRODUCTS, payload: true });
    const products = fetchApi("/api/products");
    products
      .then((products) => {
        dispatch({ type: actions.FETCH_PRODUCTS, payload: products });
        dispatch({ type: actions.LOADING_PRODUCTS, payload: false });
      })
      .catch((error) => {
        dispatch({ type: actions.FETCH_ERROR, payload: error.message });
      });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        isLoadingProducts: state.isLoadingProducts,
        isLoadingCategories: state.isLoadingCategories,
        errorProducts: state.error,
        products: state.products,
        setFilteredProducts,
        filteredProducts: state.filteredProducts,
        categories: state.categories,
        filterByCategory,
        filterByPrice,
        filterByColor,
        searchProduct,
        title: state.title,
        changeTitle,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
