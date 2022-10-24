import {CreateAccountFormik} from './create-account-formik';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import React from 'react';
import {render} from '@testing-library/react';

describe('CreateAccountFormik', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CreateAccountFormik />
      </MuiPickersUtilsProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
