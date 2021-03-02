import React from "react";
import QuantityChanger from "../../shared/QuantityChanger";
import "./index.scss";

function ProductBox({ product }) {
  return (
    <div className="product-box">
      <div className="product-box__price">${product.price}</div>
      <h2 className="product-box__quantity-title">Quantity</h2>
      <QuantityChanger product={product} isAddToCart={true} />
    </div>
  );
}

export default ProductBox;
