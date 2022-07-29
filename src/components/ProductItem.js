import React from "react";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

function ProductItem({ id, imageurl, onDelete, onEdit, name, price }) {
  return (
    <article className="product-item">
      <ProductImage imageurl={imageurl} />
      <section className="product-item__action">
        <EditIcon id={id} onEdit={onEdit} />
        <DeleteIcon id={id} onDelete={onDelete} />
      </section>
      <ProductInfo
        className="product-item__content"
        name={name}
        price={price}
      />
    </article>
  );
}

export default ProductItem;
