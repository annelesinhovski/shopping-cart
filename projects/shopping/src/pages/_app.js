import React from 'react';
import App from 'next/app';
import { theme } from '@shoppingcart/utils';
import { Layout } from '@shoppingcart/components';
import { PaymentStore } from '../stores/PaymentStore';
import { ThemeProvider } from 'styled-components';

export default class MyApp extends App {
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
