import React from "react";

import {
  Layout,
  Button,
  FormProvider,
  Form,
  Input,
} from "@boticario/components";

function Checkout() {
  return (
    <Layout>
      Página de checkout
      <FormProvider>
        <Form>
          <Input label="teste" placeholder="teste" />
        </Form>
        <Button.Form>Botão</Button.Form>
      </FormProvider>
    </Layout>
  );
}

export default Checkout;
