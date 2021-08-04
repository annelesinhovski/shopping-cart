import React, { useEffect, useState } from "react";

import {
  Page,
  Wrapper,
  Button,
  FormProvider,
  Form,
  Input,
  Navigation,
  Well,
  Card,
  SummaryList,
  H1,
  Loading,
} from "@boticario/components";

import { Chart } from "@boticario/services";

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

  if (!chart) {
    return <Loading />;
  }

  return (
    <Page title="Pagamento - O Boticário">
      <Navigation
        nav={[
          {
            text: <>SACOLA</>,
          },
          { active: true, text: <>PAGAMENTO</> },
          {
            text: <>CONFIRMAÇÃO</>,
          },
        ]}
      />
      <Wrapper>
        <Well>
          <H1>CARTÃO DE CRÉDITO</H1>
        </Well>
        <FormProvider>
          <Card themeWhite>
            <Form>
              <Input
                label="Número do cartão:"
                placeholder="____.____.____.____"
              />
              <Input label="Nome do Titular:" placeholder="Como no cartão" />
              <Input label="Validade (mês/ano):" placeholder="__/____" />
              <Input label="CVV:" placeholder="___" />
            </Form>
          </Card>

          <Card>
            <SummaryList priceValue={chart} />
          </Card>

          <Button>fINALIZAR O PEDIDO</Button>
        </FormProvider>
      </Wrapper>
    </Page>
  );
}

export default Payment;
