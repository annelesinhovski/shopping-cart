/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { useField } from "formik";
import MaskedInput from "react-text-mask";

import { InputWrapper, InputBase, Label } from "./Input.styles";

const Input = forwardRef(
  ({ label, mask, onChange, onBlur, onFocus, ...props }, ref) => {
    const [field, meta] = useField(props);

    const onFocusInterceptor = (event) => {
      if (onFocus) {
        onFocus(event);
      }
    };

    const onChangeInterceptor = (event) => {
      field.onChange(event);

      if (onChange) {
        onChange(event);
      }
    };

    const onBlurInterceptor = (event) => {
      field.onBlur(event);

      if (onBlur) {
        onBlur(event);
      }
    };

    const inputMask = () => {
      if (mask) {
        return {
          mask,
          as: MaskedInput,
          guide: false,
        };
      }

      return {};
    };

    return (
      <InputWrapper>
        {label && <Label>{label}</Label>}

        <InputBase
          variant={
            typeof meta.error === "string" && meta.touched ? "error" : "default"
          }
          value={meta.value}
          onFocus={onFocusInterceptor}
          onChange={onChangeInterceptor}
          onBlur={onBlurInterceptor}
          ref={ref}
          {...inputMask()}
          {...props}
        />
      </InputWrapper>
    );
  }
);

export { Input };
