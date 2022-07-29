import React from "react";
import ProductItem from "./ProductItem";

function ProductsList({ products, onDelete, onEdit }) {
  return (
    <main className="products-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          imageurl={product.imageurl}
          name={product.name}
          price={product.price}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </main>
  );
}

export default ProductsList;
