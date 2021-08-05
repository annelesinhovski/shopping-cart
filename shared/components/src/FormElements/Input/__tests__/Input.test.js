import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from '../Input';
import { FormProvider } from '../../Form/FormProvider';
import { Form } from '../../Form/Form';

const focusDummy = jest.fn();
const blurDummy = jest.fn();
const changeDummy = jest.fn();

const wrapper = () =>
  render(
    <FormProvider initialValues={{ teste: '' }}>
      <Form>
        <Input
          name="teste"
          data-testid="teste"
          onFocus={focusDummy}
          onBlur={blurDummy}
          mask={['(', /\d/, /\d/, ')']}
        />
      </Form>
    </FormProvider>
  );

const wrapperError = () =>
  render(
    <FormProvider
      initialValues={{ teste: '' }}
      initialErrors={{ teste: 'Required' }}
    >
      <Form>
        <Input name="teste" data-testid="teste-error" onChange={changeDummy} />
      </Form>
    </FormProvider>
  );

describe('Input', () => {
  test('Testa eventos de blur e focus com mascara', () => {
    const { getByTestId } = wrapper();
    const input = getByTestId('teste');

    act(() => {
      fireEvent.focus(input);
      fireEvent.blur(input);
      fireEvent.change(input, { target: { value: '12' } });
    });

    expect(focusDummy).toBeCalled();
    expect(blurDummy).toBeCalled();
    expect(input).toHaveValue('(12)');
  });

  test('Testa erro e evento de change', () => {
    const { getByTestId } = wrapperError();
    const input = getByTestId('teste-error');

    act(() => {
      fireEvent.focus(input);
      fireEvent.blur(input);
      fireEvent.change(input, { target: { value: '123' } });
    });

    expect(changeDummy).toBeCalled();
  });
});
