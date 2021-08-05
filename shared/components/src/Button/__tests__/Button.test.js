import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '..';

test('Should match snapshot', () => {
  const { getByText } = render(<Button>Teste</Button>);

  expect(getByText('Teste'));
});
