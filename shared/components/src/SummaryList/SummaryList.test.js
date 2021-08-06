import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SummaryList } from './SummaryList';

const priceValue = jest.fn();

jest.mock('@shoppingcart/utils');

test('Should match snapshot', () => {
  const { asFragment } = render(<SummaryList priceValue={priceValue} />);

  expect(asFragment).toMatchSnapshot();
});
