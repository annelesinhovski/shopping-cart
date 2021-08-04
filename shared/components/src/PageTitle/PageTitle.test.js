import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PageTitle } from './PageTitle';

test('Check if the child is rendered', () => {
  const { asFragment } = render(<PageTitle>Teste</PageTitle>);
  expect(asFragment).toMatchSnapshot();
});
