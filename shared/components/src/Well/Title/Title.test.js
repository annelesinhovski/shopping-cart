import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Title } from './Title';

describe('Title', () => {
  test('Renders component com texto', () => {
    const { getByText } = render(<Title>Teste</Title>);

    expect(getByText('Teste'));
  });
});
