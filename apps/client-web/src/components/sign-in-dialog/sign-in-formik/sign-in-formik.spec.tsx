import {EntailSignInForm} from './sign-in-formik';
import React from 'react';
import {render} from '@testing-library/react';

describe('EntailCreateAccountForm', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<EntailSignInForm />);
    expect(baseElement).toBeTruthy();
  });
});
