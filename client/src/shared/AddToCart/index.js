import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "../Button";
import "./index.scss";

function AddToCart({ item, quantity }) {
  const { addItem } = useContext(CartContext);
  return (
    <Button
      onClick={() => {
        addItem(item, quantity);
      }}
    >
      add to cart
    </Button>
  );
}

export default AddToCart;
