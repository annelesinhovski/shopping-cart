import React from "react";

import { Products, Product } from "./Product.styles";
import { ProductBase } from "./ProductBase";

function ProductList({ products = [] }) {
  return (
    <Products>
      {products.map((item, i) => (
        <Product key={item + i}>
          <ProductBase
            text={item.text}
            src={item.src}
            alt={item.text}
            price={item.price}
          />
        </Product>
      ))}
    </Products>
  );
}

export { ProductList };
