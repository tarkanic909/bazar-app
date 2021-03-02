import { getTotal } from "../../services/products";
import actions from "./actions";

function cartReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.ADD_ITEM:
      const newItems = [...state.items, { ...payload, quantity: 1 }];
      return {
        ...state,
        total: getTotal(newItems),
        items: newItems,
      };

    case actions.REMOVE_ITEM:
      const items = [...state.items].filter((item) => item.id !== payload);

      return {
        ...state,
        total: getTotal(items),
        items: [...items],
      };

    case actions.CHANGE_QUANTITY:
      const quantity = payload.quantity;
      const item = state.items.find((item) => item.id === payload.id);

      if (quantity) {
        item.quantity = quantity;
      } else {
        item.quantity++;
      }
      return {
        ...state,
        total: getTotal(state.items),
      };

    case actions.UPDATE_CART:
      return {
        ...state,
        isUpdate: payload,
      };

    default:
      if (!action.hasOwnProperty("type")) {
        throw new Error("cartReducer: You must set type of action");
      }
      throw new Error(`cartReducer: Cant find action of this type: ${type}`);
  }
}

export default cartReducer;
