import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductBase } from './ProductBase';
import { ProductList } from './ProductList';

const products = [{ text: 'text', src: 'icon.jpg', price: '1' }];

test('Should match snapshot', () => {
  const { asFragment } = render(
    <ProductBase text="text" src="icon.jpg" price="1" />
  );

  expect(asFragment).toMatchSnapshot();
});

test('Should match snapshot', () => {
  const { asFragment } = render(<ProductList products={products} />);

  expect(asFragment).toMatchSnapshot();
});
