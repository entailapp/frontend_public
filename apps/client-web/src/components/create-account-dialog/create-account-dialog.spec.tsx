import {CreateAccountDialog} from './create-account-dialog';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import React from 'react';
import {render} from '@testing-library/react';

describe('CreateAccountDialog', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CreateAccountDialog open />
      </MuiPickersUtilsProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
