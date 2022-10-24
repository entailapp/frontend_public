import {AppBar} from './app-bar';
import React from 'react';
import {render} from '@testing-library/react';

describe('AppBar', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<AppBar />);
    expect(baseElement).toBeTruthy();
  });
});
