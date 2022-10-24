import {EyeIcon, EyeOffIcon} from '@iconicicons/react';
import {
  IconButton,
  InputAdornment,
  StandardTextFieldProps,
  TextField,
} from '@material-ui/core';

import React from 'react';

export interface ShowPasswordTextFieldProps
  extends Omit<StandardTextFieldProps, 'type'> {
  showPassword?: boolean;
  onClickEyeIcon?: React.MouseEventHandler<HTMLButtonElement>;
}

/** A password text field component with an eye adornment to show or hide the password input value.*/
export function ShowPasswordTextField(props: ShowPasswordTextFieldProps) {
  const {InputProps, ...other} = props;

  const [showPassword_, setShowPassword_] = React.useState<boolean>(false);

  const {
    showPassword = showPassword_,
    onClickEyeIcon = () => setShowPassword_(!showPassword),
  } = props;

  const endAdornment = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={onClickEyeIcon}
      >
        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <TextField
      {...other}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        ...InputProps,
        endAdornment: endAdornment,
      }}
    />
  );
}

export default ShowPasswordTextField;
