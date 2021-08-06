import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Notice } from './Notice';

test('Should match snapshot', () => {
  const { asFragment } = render(<Notice />);

  expect(asFragment).toMatchSnapshot();
});
