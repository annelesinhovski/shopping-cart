/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { useField } from "formik";
import MaskedInput from "react-text-mask";

import { InputWrapper, InputBase, Label, ErrorMessage } from "./Input.styles";

const Input = forwardRef(
  ({ label, error, mask, onChange, onBlur, onFocus, ...props }, ref) => {
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

    const displayError =
      typeof meta.error === "string" && meta.error && meta.touched;

    return (
      <InputWrapper>
        {label && <Label>{label}</Label>}

        <InputBase
          variant={displayError ? "error" : "default"}
          value={meta.value}
          onFocus={onFocusInterceptor}
          onChange={onChangeInterceptor}
          onBlur={onBlurInterceptor}
          ref={ref}
          {...inputMask()}
          {...props}
        />

        {displayError && <ErrorMessage>{meta.error}</ErrorMessage>}
      </InputWrapper>
    );
  }
);

export { Input };
