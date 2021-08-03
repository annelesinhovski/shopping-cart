import React, { Fragment } from "react";
import { Formik } from "formik";
import { defaultSchema } from "@boticario/utils";

const FormProvider = ({ validationSchema, onSubmit, children, ...props }) => {
  const handlerSubmit = (values, actions) => {
    actions.setSubmitting(true);
    onSubmit(values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handlerSubmit}
      {...props}
    >
      <Fragment>{children}</Fragment>
    </Formik>
  );
};

FormProvider.defaultProps = {
  validationSchema: defaultSchema,
};

export { FormProvider };
