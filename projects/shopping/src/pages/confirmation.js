import React, { useEffect, useState } from "react";

import {
  Page,
  Wrapper,
  Navigation,
  Card,
  Well,
  H1,
  H2,
  Text,
  ProductList,
  SummaryList,
  Notice,
} from "@boticario/components";

import { Chart } from "@boticario/services";
import { normalizeMoneyValue } from "@boticario/utils";

function Confirmation() {
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

  return (
    <Page title="Confirmação - O Boticário">
      <Navigation
        nav={[
          {
            text: <>SACOLA</>,
          },
          {
            text: <>PAGAMENTO</>,
          },
          { active: true, text: <>CONFIRMAÇÃO</> },
        ]}
      />
      <Wrapper>
        <Notice
          text="Compra efetuada com sucesso"
          icon="/images/icons/success.png"
        />
        <Well>
          <H1>PAGAMENTO</H1>
        </Well>
        <Card themeWhite>
          <Text>dados cartão</Text>
          <Text>dados cartão</Text>
          <Text>dados cartão</Text>
        </Card>
        <Well>
          <H2>PRODUTOS</H2>
        </Well>
        <Card themeWhite>
          <ProductList products={[...mapperProducts(chart)]} />
        </Card>

        <Card>
          <SummaryList priceValue={chart} />
        </Card>
      </Wrapper>
    </Page>
  );
}

export default Confirmation;
