import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Text } from './Text';

test('Should match snapshot', () => {
  const { asFragment } = render(<Text>Teste</Text>);

  expect(asFragment).toMatchSnapshot();
});
