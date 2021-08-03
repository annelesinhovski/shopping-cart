import React, { forwardRef } from "react";
import { Button } from "./Button.styles";

const ButtonBase = forwardRef((props, ref) => {
  return <Button {...props} ref={ref} />;
});

export { ButtonBase };
