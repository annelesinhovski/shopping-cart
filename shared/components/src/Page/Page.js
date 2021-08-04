import React from "react";

import { Container } from "../Container/Container";

import { Layout } from "../Layout/Layout";

function Page({ children, title, ...props }) {
  return (
    <Layout>
      <Container title={title} {...props}>
        {children}
      </Container>
    </Layout>
  );
}

export { Page };
