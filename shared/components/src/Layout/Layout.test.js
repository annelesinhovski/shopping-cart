import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Layout } from './Layout';

test('Should match snapshot', () => {
  const { asFragment } = render(<Layout>Teste</Layout>);

  expect(asFragment).toMatchSnapshot();
});
