import React from "react";

function ProductImage({ imageurl }) {
  return (
    <figure className="product-item__image">
      <img src={imageurl} alt="product" />
    </figure>
  );
}

export default ProductImage;
