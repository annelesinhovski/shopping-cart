import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from './Card';

test('Should match snapshot', () => {
  const { asFragment } = render(<Card items={['Item 1', 'Item 2']} />);

  expect(asFragment).toMatchSnapshot();
});

test('Render component', () => {
  render(<Card>Teste 01</Card>);

  expect(screen.getByText('Teste 01'));
});
