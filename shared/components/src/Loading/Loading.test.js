import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Loading } from './Loading';

test('Should match snapshot', () => {
  const { asFragment } = render(<Loading />);

  expect(asFragment).toMatchSnapshot();
});
