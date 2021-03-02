import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import AddToCart from "../AddToCart";
import "./index.scss";

function QuantityChanger({
  product,
  id,
  quantity = 0,
  isAddToCart = false,
  className,
}) {
  const [value, setValue] = useState(quantity || 1);
  const { cart, changeQuantity, updateCart, removeItem } = useContext(
    CartContext
  );

  useEffect(() => {
    if (cart.isUpdate) {
      if (value === 0) {
        removeItem.current(id);
        return;
      }
      changeQuantity.current(id, parseInt(value));
    }
    updateCart.current(false);
  }, [cart.isUpdate, value, changeQuantity, id, updateCart, removeItem]);

  return (
    <div className={"quantity-changer " + className}>
      <div className="quantity-changer__form">
        <button
          className="quantity-changer__button"
          onClick={(e) => {
            setValue((prevValue) => {
              if (prevValue === 0) return 0;
              console.log(prevValue);
              return parseInt(prevValue) - 1;
            });
          }}
        >
          -
        </button>
        <input
          className="quantity-changer__input"
          onChange={(e) => {
            setValue(parseInt(e.target.value));
          }}
          type="number"
          value={value}
        />
        <button
          className="quantity-changer__button"
          onClick={() => {
            setValue((prevValue) => parseInt(prevValue) + 1);
          }}
        >
          +
        </button>
      </div>
      {isAddToCart && <AddToCart quantity={value + quantity} item={product} />}
    </div>
  );
}

export default QuantityChanger;
