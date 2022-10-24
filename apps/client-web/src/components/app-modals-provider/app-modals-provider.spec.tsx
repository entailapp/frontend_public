import {AppModalsProvider} from './app-modals-provider';
import React from 'react';
import {render} from '@testing-library/react';

describe('AppModalsProvider', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<AppModalsProvider />);
    expect(baseElement).toBeTruthy();
  });
});
