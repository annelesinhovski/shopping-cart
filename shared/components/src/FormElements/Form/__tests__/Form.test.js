import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormProvider } from '../FormProvider';
import { Form } from '../Form';

const submit = jest.fn();

describe('FormProvider', () => {
  test('Renders component com texto', async () => {
    const { getByText } = render(
      <FormProvider onSubmit={submit} initialValues={{ teste: 'teste' }}>
        <Form>
          <button type="submit">Teste</button>
        </Form>
      </FormProvider>
    );

    fireEvent.click(getByText('Teste'));

    await waitFor(() => expect(submit).toBeCalledWith({ teste: 'teste' }));
  });
});
