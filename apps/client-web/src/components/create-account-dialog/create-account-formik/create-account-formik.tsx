import {
  CreateAccountForm,
  CreateAccountFormValues,
} from './create-account-form/create-account-form';
import {Formik, FormikErrors} from 'formik';
import {
  calculatePasswordStrength,
  isEmailAddress,
} from '@entail/business-logic';

import React from 'react';
import {application} from '../../../lib/application-constants';

export interface CreateAccountFormikProps {
  requiredPasswordStrengthThreshold?: number;
}

/** The form component for the create account flow with validate and submit events. */
export function CreateAccountFormik(props: CreateAccountFormikProps) {
  const {requiredPasswordStrengthThreshold = 2} = props;

  return (
    <Formik
      onSubmit={(values: CreateAccountFormValues, formikHelpers) => {
        /** @todo until a proper back-end API endpoint exsits, log the values */
        console.log(values);
        formikHelpers.setSubmitting(false);
      }}
      initialValues={{
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        betakey: '',
        dob: null,
      }}
      validate={(values: CreateAccountFormValues) => {
        const errors: FormikErrors<CreateAccountFormValues> = {};

        // validate username
        if (!values.username) {
          errors.username = 'required';
        }

        // validate email
        if (!values.email) {
          errors.email = 'required';
        } else {
          if (!isEmailAddress(values.email)) {
            errors.email =
              application.VALIDATION_MESSAGE_EMAIL_MALFORMED_SYNTAX;
          }
        }

        // validate password
        if (!values.password) {
          errors.password = 'required';
        } else {
          const passwordStrength: number = calculatePasswordStrength(
            values.password
          );

          if (passwordStrength < requiredPasswordStrengthThreshold) {
            errors.password = 'password is too weak';
          }
        }

        // validate password confirm
        if (!values.passwordConfirm) {
          errors.passwordConfirm = 'required';
        } else {
          if (values.passwordConfirm !== values.password) {
            errors.passwordConfirm = 'does not match reference password';
          }
        }

        // validate betakey
        if (!values.betakey) {
          errors.betakey = 'required';
        }

        // validate dob
        if (!values.dob) {
          errors.dob = 'required';
        }

        return errors;
      }}
    >
      {CreateAccountForm}
    </Formik>
  );
}

export default CreateAccountFormik;
