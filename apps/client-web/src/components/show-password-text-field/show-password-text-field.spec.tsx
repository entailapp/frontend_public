import React from 'react';
import {ShowPasswordTextField} from './show-password-text-field';
import {render} from '@testing-library/react';

describe('ShowPasswordTextField', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<ShowPasswordTextField />);
    expect(baseElement).toBeTruthy();
  });
});
