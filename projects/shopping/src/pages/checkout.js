import React from "react";

import {
  Page,
  Navigation,
  Card,
  Well,
  Title,
  ProductList,
  ProductBase,
} from "@boticario/components";

function Payment() {
  return (
    <Page title="Sacola - O Boticário">
      <Navigation
        nav={[
          {
            active: true,
            text: <>SACOLA</>,
          },
          {
            text: <>PAGAMENTO</>,
          },
          {
            text: <>CONFIRMAÇÃO</>,
          },
        ]}
      />
      <Well>
        <Title>PRODUTOS</Title>
      </Well>
      <Card>
        <ProductList products={[{ text: "teste" }, { text: "teste" }]} />
      </Card>
    </Page>
  );
}

export default Payment;
