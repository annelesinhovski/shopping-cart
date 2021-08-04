import React, { useEffect, useState } from "react";

import {
  Page,
  Wrapper,
  Navigation,
  Card,
  Well,
  H1,
  ProductList,
  Button,
  SummaryList,
} from "@boticario/components";

import { Chart } from "@boticario/services";
import { normalizeMoneyValue } from "@boticario/utils";

function Payment() {
  const [chart, setChart] = useState(null);

  const fetchChart = async () => {
    try {
      const response = await Chart.getChart();
      console.log(response);
      setChart(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChart();
  }, []);

  const mapperProducts = ({ items }) => {
    return items.map((item) => {
      const { name: text, priceSpecification, imageObjects } = item.product;
      return {
        text,
        price: normalizeMoneyValue(priceSpecification.price),
        src: imageObjects[0].thumbnail,
      };
    });
  };

  if (!chart) {
    return "loading";
  }

  const { total, subTotal, discount, shippingTotal } = chart;

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
      <Wrapper>
        <Well>
          <H1>PRODUTOS</H1>
        </Well>
        <Card themeWhite>
          <ProductList products={[...mapperProducts(chart)]} />
        </Card>

        <Card>
          <SummaryList priceValue={chart} />
        </Card>

        <Button>Seguir para o pagamento</Button>
      </Wrapper>
    </Page>
  );
}

export default Payment;
