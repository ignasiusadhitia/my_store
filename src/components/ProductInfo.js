import React from "react";

function ProductInfo({ name, price }) {
  return (
    <section className="product-item__content">
      <span className="product-item__name">{name}</span>
      <span className="product-item__price">$ {price}</span>
    </section>
  );
}

export default ProductInfo;
