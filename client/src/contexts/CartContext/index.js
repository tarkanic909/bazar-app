import React, { createContext, useReducer, useRef } from "react";
import { isInCart } from "../../services/products";
import cartReducer from "./cartReducer";
import actions from "./actions";

export const CartContext = createContext();

const initialState = { items: [], total: 0, isUpdate: false };

function CartContextProvider({ children }) {
  const [state, dispach] = useReducer(cartReducer, initialState);

  function addItem(newProduct, quantity = 0) {
    if (quantity) {
      addItemWithQuantity(newProduct, quantity);
    } else {
      addItemWithoutQuantity(newProduct);
    }
  }

  function addItemWithoutQuantity(newProduct) {
    const id = newProduct.id;

    if (isInCart(id, state.items)) {
      changeQuantity.current(id);
      return;
    }
    dispach({ type: actions.ADD_ITEM, payload: newProduct });
  }

  function addItemWithQuantity(newProduct, quantity) {
    const id = newProduct.id;

    if (!isInCart(id, state.items)) {
      dispach({ type: actions.ADD_ITEM, payload: newProduct });
    }
    changeQuantity.current(id, quantity);
  }

  function removeItem(id) {
    dispach({ type: actions.REMOVE_ITEM, payload: id });
  }

  const updateCart = useRef();

  updateCart.current = (isUpdate) => {
    dispach({ type: actions.UPDATE_CART, payload: isUpdate });
  };

  const changeQuantity = useRef();

  changeQuantity.current = (id, quantity = 0) => {
    dispach({
      type: actions.CHANGE_QUANTITY,
      payload: { id, quantity },
    });
  };

  function getItem(id) {
    if (isInCart(id, state.items)) {
      const item = state.items.find((item) => item.id === id);
      return item;
    }
    return null;
  }

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItem,
        removeItem,
        getItem,
        updateCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
