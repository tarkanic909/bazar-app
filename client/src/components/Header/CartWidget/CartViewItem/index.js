import React, { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import "./index.scss";

function CartViewItem({ item }) {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="Cart-view-item" key={item.id}>
      <div className="Cart-view-item__top">
        <img className="Cart-view-item__image" src={item.img} alt="" />
        <div className="Cart-view-item__right">
          <a className="Cart-view-item__name" href={`/product/${item.id}`}>
            {item.name}
          </a>
          <button
            className="Cart-view-item__remove"
            onClick={() => {
              removeItem.current(item.id);
            }}
          >
            × Remove
          </button>
        </div>
      </div>
      <p className="Cart-view-item__price">
        {item.quantity} × ${item.price}
      </p>
    </li>
  );
}

export default CartViewItem;
