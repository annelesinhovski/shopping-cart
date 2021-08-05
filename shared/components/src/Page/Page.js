import React from "react";

import { Container } from "../Container/Container";

function Page({ children, title, ...props }) {
  return (
    <Container title={title} {...props}>
      {children}
    </Container>
  );
}

export { Page };
