import React from "react";

import { Menu, MenuItem } from "./Navigation.styles";

function Navigation({ nav = [] }) {
  const navItens = nav.map((nav, i) => (
    <MenuItem key={nav + i}>
      <ItemNav text={nav.text} active={nav.active} />
    </MenuItem>
  ));

  return <Menu>{navItens}</Menu>;
}

function ItemNav({ text, active }) {
  if (active) {
    return (
      <span>
        <strong>{text}</strong>
      </span>
    );
  }
  return <span>{text}</span>;
}

export { Navigation };
