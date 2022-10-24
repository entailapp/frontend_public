import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Link,
  Typography,
} from '@material-ui/core';

import {CreateAccountFormik} from './create-account-formik/create-account-formik';
import React from 'react';

export type CreateAccountDialogProps = DialogProps;

/** A container component for the the entail create account form. */
export function CreateAccountDialog(props: CreateAccountDialogProps) {
  return (
    <Dialog {...props}>
      <DialogTitle>
        Sign Up
        <Typography>
          Already have an account?&nbsp;
          <Link href="https://en.wikipedia.org/wiki/Login">Log in</Link>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <CreateAccountFormik />
      </DialogContent>
    </Dialog>
  );
}

export default CreateAccountDialog;
