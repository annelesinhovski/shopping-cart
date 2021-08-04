import React from "react";

import * as L from "./Loading.styles";

export const Loading = () => {
  return (
    <L.Wrapper>
      <img src="/images/loader.gif" alt="" />
      <p>Carregando informações...</p>
    </L.Wrapper>
  );
};
