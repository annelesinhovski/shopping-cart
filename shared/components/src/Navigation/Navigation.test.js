import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Navigation } from './Navigation';

test('Should match snapshot', () => {
  const { asFragment } = render(
    <Navigation nav={[{ active: true, text: 'teste' }, { text: 'teste 2' }]} />
  );

  expect(asFragment).toMatchSnapshot();
});
