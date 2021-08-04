import React from "react";

import { ProductBase } from "./ProductBase";

function ProductList({ products = [] }) {
  // debugger;

  return (
    <ul>
      {products.map((item, i) => (
        <li key={item + i}>
          <ProductBase
            text={item.text}
            src={item.src}
            alt={item.text}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );
}

export { ProductList };
