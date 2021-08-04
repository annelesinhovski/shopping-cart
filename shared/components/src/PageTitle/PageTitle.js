import React, { Fragment } from 'react';
import Head from 'next/head';

export const PageTitle = ({ title, children }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </Fragment>
);
