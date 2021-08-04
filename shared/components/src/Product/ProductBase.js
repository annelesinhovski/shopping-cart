import React from "react";

import * as P from "./Product.styles";

function ProductBase({ text, src, price }) {
  return (
    <P.Tile>
      <P.Image src={src} alt={text} />
      <figcaption>
        <P.Name>{text}</P.Name>
        <P.Price>{price}</P.Price>
      </figcaption>
    </P.Tile>
  );
}

export { ProductBase };
