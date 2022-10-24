import {
  Button,
  InputAdornment,
  LinearProgress,
  Link,
  TextField,
  Tooltip,
} from '@material-ui/core';

import {FormikProps} from 'formik';
import {InformationIcon} from '@iconicicons/react';
import {KeyboardDatePicker} from '@material-ui/pickers';
import React from 'react';
import {ShowPasswordTextField} from '../../../show-password-text-field/show-password-text-field';
import {calculatePasswordStrength} from '@entail/business-logic';

export interface CreateAccountFormValues {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  betakey: string;
  dob: Date | null;
}

export type CreateAccountFormProps = FormikProps<CreateAccountFormValues>;

/** The underlying form component for the create account flow. */
export function CreateAccountForm(props: CreateAccountFormProps) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = props;

  const [passwordStrength, setPasswordStrength] = React.useState<number>(0);

  React.useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(values.password) / 4);
  }, [values.password]);

  const dateOfBirthFieldName = 'dob';

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        fullWidth
        name="username"
        label="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && !!errors.username}
        helperText={touched.username && errors.username}
      />

      <TextField
        fullWidth
        name="email"
        label="email"
        type="email"
        placeholder="enny@entail.email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && !!errors.email}
        helperText={touched.email && errors.email}
      />

      <div>
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

        <LinearProgress variant="determinate" value={passwordStrength * 100} />
      </div>

      <ShowPasswordTextField
        fullWidth
        label="confirm password"
        name="passwordConfirm"
        value={values.passwordConfirm}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.passwordConfirm && !!errors.passwordConfirm}
        helperText={touched.passwordConfirm && errors.passwordConfirm}
      />

      <TextField
        fullWidth
        name="betakey"
        label="beta key"
        value={values.betakey}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.betakey && !!errors.betakey}
        helperText={touched.betakey && errors.betakey}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip
                title={
                  <>
                    Entail is currently in closed beta.&nbsp;
                    <Link href="https://en.wikipedia.org/wiki/Learning">
                      Learn more
                    </Link>
                  </>
                }
                interactive
              >
                <span className="MuiIconButton-root">
                  <InformationIcon />
                </span>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />

      <KeyboardDatePicker
        fullWidth
        name={dateOfBirthFieldName}
        disableToolbar
        variant="inline"
        label="date of birth"
        format="yyyy-MM-dd"
        value={values.dob}
        onChange={value => setFieldValue(dateOfBirthFieldName, value)}
        onBlur={handleBlur}
        error={touched.dob && !!errors.dob}
        helperText={touched.dob && errors.dob}
      />

      <div className="flex justify-end mt-4">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={isSubmitting}
        >
          sign up
        </Button>
      </div>
    </form>
  );
}

export default CreateAccountForm;
