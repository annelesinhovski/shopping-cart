import React from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "@boticario/utils";

import { Wrapper, Container } from "../Layout/Layout.styles";

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

          ::-webkit-input-placeholder {
            /* Edge */
            color: #e0e7ee;
          }

          :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #e0e7ee;
          }

          ::placeholder {
            color: #e0e7ee;
          }
        `}
      </style>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Container {...props} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
