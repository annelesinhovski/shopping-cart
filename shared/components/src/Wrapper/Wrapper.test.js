import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Wrapper } from './Wrapper';

test('Should match snapshot', () => {
  const { asFragment } = render(<Wrapper>Teste</Wrapper>);

  expect(asFragment).toMatchSnapshot();
});
