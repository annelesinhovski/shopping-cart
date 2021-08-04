import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Container } from './Container';

describe('Container', () => {
  test('Renders component com texto', () => {
    const { getByText } = render(<Container>Teste</Container>);

    expect(getByText('Teste'));
  });
});
