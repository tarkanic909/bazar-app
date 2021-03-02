import actions from "./actions";

function productsReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.LOADING_CATEGORIES:
      return {
        ...state,
        isLoadingCategories: payload,
      };
    case actions.LOADING_PRODUCTS:
      return {
        ...state,
        isLoadingProducts: payload,
      };
    case actions.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case actions.FETCH_ERROR:
      return {
        ...state,
        error: payload,
      };
    case actions.FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case actions.SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: [...state.products],
      };

    case actions.FILTER_BY_CATEGORY:
      const filteredProducts = state.products.filter(
        (product) =>
          product.category === payload || product.subcategory === payload
      );
      return {
        ...state,
        filteredProducts,
      };

    case actions.FILTER_BY_COLOR:
      return {
        ...state,
        filteredProducts: state.products.filter((product) =>
          product.colors.includes(payload)
        ),
      };

    case actions.SEARCH_PRODUCT:
      const searchedProducts = state.products.filter((product) => {
        return product.name.toLowerCase().includes(payload.toLowerCase());
      });

      return {
        ...state,
        filteredProducts: searchedProducts,
      };

    case actions.FILTER_BY_PRICE:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) =>
            product.price >= payload[0] && product.price <= payload[1]
        ),
      };

    case actions.CHANGE_TITLE:
      return {
        ...state,
        title: payload,
      };

    default:
      if (!action.hasOwnProperty("type")) {
        throw new Error("productsReducer: You must set type of action");
      }
      throw new Error(
        `productsReducer: Cant find action of this type: ${type}`
      );
  }
}

export default productsReducer;
