import React from 'react';
import Router, { useRouter } from 'next/router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages';

jest.mock('next/router');

test('Verifica se redirect inicial aconteça caso pathname seja igual "/"', () => {
  useRouter.mockReturnValue({
    pathname: '/',
  });
  render(<Home />);

  expect(Router.push).toBeCalledWith({ pathname: '/checkout' });
});
