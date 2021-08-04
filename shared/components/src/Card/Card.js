import React from "react";

import { CardBody, List, Item } from "./Card.styles.js";

const Card = ({ themeWhite, items = [], children, ...props }) => {
  return (
    <CardBody themeWhite={themeWhite} {...props}>
      {items.length ? (
        <List>
          {items.map((item, i) => (
            <Item key={`item-${i}`}>
              <p>{item}</p>
            </Item>
          ))}
        </List>
      ) : null}
      {children}
    </CardBody>
  );
};

export { Card };
