import React, { useContext } from 'react';

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
  Loading,
} from '@shoppingcart/components';

import { PaymentContext } from '../stores/PaymentStore';

function Confirmation() {
  const context = useContext(PaymentContext);

  if (!context.state.payment) {
    return <Loading />;
  }

  const maskCreditCard = (card) => {
    const [p1, p2, p3, p4] = card.split(' ');

    const mask = (part) => part.replace(/\d/g, '*');

    return [mask(p1), mask(p2), mask(p3), p4].join(' ');
  };

  return (
    <Page title="Confirmação - O Boticário">
      <Navigation
        nav={[
          {
            text: 'SACOLA',
          },
          {
            text: 'PAGAMENTO',
          },
          {
            active: true,
            text: 'CONFIRMAÇÃO',
          },
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
          <Text>{maskCreditCard(context.state.userData.card)}</Text>
          <Text>{context.state.userData.fullName.toUpperCase()}</Text>
          <Text>{context.state.userData.dateValidate}</Text>
        </Card>
        <Well>
          <H2>PRODUTOS</H2>
        </Well>
        <Card themeWhite>
          <ProductList products={context.state.payment.items} />
        </Card>

        <Card>
          <SummaryList priceValue={context.state.payment} />
        </Card>
      </Wrapper>
    </Page>
  );
}

export default Confirmation;
