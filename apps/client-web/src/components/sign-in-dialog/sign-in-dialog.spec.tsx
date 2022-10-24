import React from 'react';
import {SignInDialog} from './sign-in-dialog';
import {render} from '@testing-library/react';

describe('SignInDialog', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<SignInDialog open />);
    expect(baseElement).toBeTruthy();
  });
});
