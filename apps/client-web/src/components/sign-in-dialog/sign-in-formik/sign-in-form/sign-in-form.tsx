import {Button, TextField} from '@material-ui/core';

import {FormikProps} from 'formik';
import React from 'react';
import {ShowPasswordTextField} from '../../../show-password-text-field/show-password-text-field';

export interface SignInFormValues {
  email: string;
  password: string;
}

export type SignInFormProps = FormikProps<SignInFormValues>;

/** The underlying form component for the sign in flow. */
export function SignInForm(props: SignInFormProps) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="email"
        name="email"
        type="email"
        placeholder="enny@entail.email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && !!errors.email}
        helperText={touched.email && errors.email}
      />

      <ShowPasswordTextField
        fullWidth
        label="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && !!errors.password}
        helperText={touched.password && errors.password}
      />

      <div className="flex justify-end mt-4">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={isSubmitting}
        >
          log in
        </Button>
      </div>
    </form>
  );
}

export default SignInForm;
