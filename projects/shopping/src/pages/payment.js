import React from "react";

import { Page, Button, FormProvider, Form, Input } from "@boticario/components";

function Payment() {
  return (
    <Page>
      Página de checkout
      <FormProvider>
        <Form>
          <Input label="teste" placeholder="teste" />
        </Form>
        <Button.Form>Botão</Button.Form>
      </FormProvider>
    </Page>
  );
}

export default Payment;
