import {Formik, FormikErrors} from 'formik';
import {SignInForm, SignInFormValues} from './sign-in-form/sign-in-form';

import React from 'react';
import {application} from '../../../lib/application-constants';
import {isEmailAddress} from '@entail/business-logic';

/** The form component for the sign in flow with validate and submit events. */
export function EntailSignInForm() {
  return (
    <Formik
      onSubmit={(values: SignInFormValues, formikHelpers) => {
        /** @todo until a proper back-end API endpoint exsits, log the values */
        console.log(values);
        formikHelpers.setSubmitting(false);
      }}
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values: SignInFormValues) => {
        const errors: FormikErrors<SignInFormValues> = {};

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
        }

        return errors;
      }}
    >
      {SignInForm}
    </Formik>
  );
}

export default EntailSignInForm;
