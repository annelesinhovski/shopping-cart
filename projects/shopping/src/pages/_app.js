import React from "react";
import App from "next/app";
import { theme } from "@boticario/utils";
import { Layout } from "@boticario/components";
import { PaymentStore } from "../stores/PaymentStore";
import { ThemeProvider } from "styled-components";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <PaymentStore>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PaymentStore>
      </ThemeProvider>
    );
  }
}

export default MyApp;
