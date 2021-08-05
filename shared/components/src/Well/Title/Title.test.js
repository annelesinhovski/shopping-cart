import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { H1, H2 } from './Title';

test('Should match snapshot', () => {
  const { asFragment } = render(<H1>Teste</H1>);

  expect(asFragment).toMatchSnapshot();
});

test('Should match snapshot', () => {
  const { asFragment } = render(<H2>Teste</H2>);

  expect(asFragment).toMatchSnapshot();
});
