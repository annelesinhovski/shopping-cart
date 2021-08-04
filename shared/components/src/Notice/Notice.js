import React from "react";

import * as N from "./Notice.styles";

function Notice({ text, icon }) {
  return (
    <N.Wrapper>
      <N.Image src={icon} alt="" />
      <N.Text>{text}</N.Text>
    </N.Wrapper>
  );
}

export { Notice };
