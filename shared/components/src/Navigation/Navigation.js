import React from "react";
import Link from "next/link";

import { Menu, MenuItem } from "./Navigation.styles";

function Navigation({ nav = [] }) {
  const navItens = nav.map((nav, i) => (
    <MenuItem key={nav + i}>
      <ItemNav {...nav} />
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
