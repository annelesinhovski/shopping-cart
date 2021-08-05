import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  Loading,
  Page,
  Wrapper,
  Navigation,
  Card,
  Well,
  H1,
  ProductList,
  Button,
  SummaryList,
} from '@shoppingcart/components';

import { Cart } from '@shoppingcart/services';
import { normalizeMoneyValue } from '@shoppingcart/utils';
import { PaymentContext } from '../stores/PaymentStore';

function Checkout() {
  const router = useRouter();
  const context = useContext(PaymentContext);

  const fetchCart = async () => {
    try {
      const response = await Cart.getCart();
      const { items, ...rest } = response.data;

      context.dispatch.payment({ items: mapperProducts({ items }), ...rest });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
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

  if (!context.state.payment) {
    return <Loading />;
  }

  return (
    <Page title="Sacola - O Boticário">
      <Navigation
        nav={[
          {
            active: true,
            text: 'SACOLA',
          },
          {
            text: 'PAGAMENTO',
          },
          {
            text: 'CONFIRMAÇÃO',
          },
        ]}
      />
      <Wrapper>
        <Well>
          <H1>PRODUTOS</H1>
        </Well>
        <Card themeWhite>
          <ProductList products={context.state.payment.items} />
        </Card>

        <Card>
          <SummaryList priceValue={context.state.payment} />
        </Card>

        <Button onClick={() => router.push('/payment')}>
          Seguir para o pagamento
        </Button>
      </Wrapper>
    </Page>
  );
}

export default Checkout;
