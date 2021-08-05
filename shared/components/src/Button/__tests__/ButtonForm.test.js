import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '..';
import { useFormikContext } from 'formik';

jest.mock('formik');

useFormikContext.mockImplementation(() => ({ isValid: true, dirty: true }));

describe('ButtonForm', () => {
  test('Renders component com texto', () => {
    render(<Button.Form>Teste</Button.Form>);

    expect(screen.getByRole('button'));
  });

  test('not valid - Disabled', () => {
    useFormikContext.mockImplementationOnce(() => ({
      isValid: false,
      dirty: true,
    }));

    render(<Button.Form>Teste</Button.Form>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  test('not valid - Disabled', () => {
    useFormikContext.mockImplementationOnce(() => ({ dirty: false }));

    render(<Button.Form>Teste</Button.Form>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  test('Disabled props - Disabled', () => {
    render(<Button.Form disabled>Teste</Button.Form>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
