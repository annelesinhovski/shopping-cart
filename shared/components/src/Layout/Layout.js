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
