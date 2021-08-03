import React, { forwardRef } from 'react';
import { useFormikContext } from 'formik';

import { Fieldset, Form as FormBase } from './Form.styles';

const Form = forwardRef(({ children, ...rest }, ref) => {
  const { handleSubmit } = useFormikContext();

  return (
    <FormBase onSubmit={handleSubmit} ref={ref} {...rest}>
      <Fieldset>{children}</Fieldset>
    </FormBase>
  );
});

export { Form };
