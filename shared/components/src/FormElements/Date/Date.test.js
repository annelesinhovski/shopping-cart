import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Date } from './Date';

test('Should match snapshot', () => {
  const { asFragment } = render(<Date />);

  expect(asFragment).toMatchSnapshot();
});
