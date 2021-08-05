import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Page } from './Page';

const wrapper = (props) => render(<Page {...props}>Teste</Page>);

test('Matches snapshot', () => {
  const { asFragment } = wrapper({ title: 'Exemplo de titulo' });

  expect(asFragment()).toMatchSnapshot();
});
