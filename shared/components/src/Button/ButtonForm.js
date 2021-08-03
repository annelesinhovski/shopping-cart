/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { useFormikContext } from "formik";
import { ButtonBase } from "./ButtonBase";

const ButtonForm = forwardRef(({ disabled, isLoading, ...props }, ref) => {
  const { isValid, dirty } = useFormikContext();

  return (
    <ButtonBase
      {...props}
      type="submit"
      ref={ref}
      disabled={disabled || !dirty || !isValid}
    />
  );
});

export { ButtonForm };
