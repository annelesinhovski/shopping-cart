import React from "react";

import { PageTitle } from "../PageTitle/PageTitle";
import { Wrapper } from "./Container.styles";

const Container = ({ children, title }) => (
  <PageTitle title={title}>
    <Wrapper>{children}</Wrapper>
  </PageTitle>
);

export { Container };
