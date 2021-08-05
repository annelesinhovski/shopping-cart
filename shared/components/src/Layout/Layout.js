import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from '@shoppingcart/utils';

import { Wrapper, Container } from '../Layout/Layout.styles';

export const Layout = (props) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: Helvetica, Arial, sans serif;
          }

          body {
            margin: 0;
            background: #eeeeee;
          }

          ::placeholder {
            color: #e0e7ee;
          }
        `}
      </style>

      <Wrapper>
        <Container {...props} />
      </Wrapper>
    </>
  );
};
