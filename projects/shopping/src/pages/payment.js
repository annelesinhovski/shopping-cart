import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import {
  Page,
  Wrapper,
  Button,
  FormProvider,
  Form,
  Input,
  Date,
  Navigation,
  Well,
  Card,
  SummaryList,
  H1,
  Loading,
} from '@shoppingcart/components';

import { validations } from '@shoppingcart/utils';
import { PaymentContext } from '../stores/PaymentStore';

function Payment() {
  const router = useRouter();
  const context = useContext(PaymentContext);

  const handleSubmit = (data) => {
    context.dispatch.userData(data);
    router.push('/confirmation');
  };

  if (!context.state.payment) {
    return <Loading />;
  }

  return (
    <Page title="Pagamento - O Boticário">
      <Navigation
        nav={[
          {
            text: 'SACOLA',
          },
          {
            active: true,
            text: 'PAGAMENTO',
          },
          {
            text: 'CONFIRMAÇÃO',
          },
        ]}
      />
      <Wrapper>
        <Well>
          <H1>CARTÃO DE CRÉDITO</H1>
        </Well>
        <FormProvider
          validationSchema={validations.paymentSchema}
          initialValues={{ card: '', dateValidate: '', cvv: '', fullName: '' }}
          onSubmit={handleSubmit}
        >
          <Card themeWhite>
            <Form id="payment-method">
              <Input
                label="Número do cartão:"
                placeholder="____.____.____.____"
                mask={CARD_MASK}
                name="card"
              />
              <Input
                label="Nome do Titular:"
                placeholder="Como no cartão"
                name="fullName"
              />
              <Date>
                <Input
                  label="Validade (mês/ano):"
                  placeholder="__/____"
                  mask={DATE_MASK}
                  name="dateValidate"
                />
                <Input
                  label="CVV:"
                  placeholder="___"
                  mask={CVV_MASK}
                  name="cvv"
                />
              </Date>
            </Form>
          </Card>

          <Card>
            <SummaryList priceValue={context.state.payment} />
          </Card>

          <Button.Form form="payment-method">FINALIZAR O PEDIDO</Button.Form>
        </FormProvider>
      </Wrapper>
    </Page>
  );
}

export default Payment;

const CARD_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

const CVV_MASK = [/\d/, /\d/, /\d/];
