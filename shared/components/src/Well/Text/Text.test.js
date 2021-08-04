import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Text } from './Text';

describe('Text', () => {
  test('Renders component com texto', () => {
    const { getByText } = render(<Text>Teste</Text>);

    expect(getByText('Teste'));
  });
});
