import React from "react";

function ProductBase({ text, src, price }) {
  return (
    <figure>
      <img src={src} alt={text} />
      <figcaption>
        <p>{text}</p>
        <span>{price}</span>
      </figcaption>
    </figure>
  );
}

export { ProductBase };
