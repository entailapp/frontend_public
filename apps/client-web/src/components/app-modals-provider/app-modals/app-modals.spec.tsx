import {AppModals} from './app-modals';
import React from 'react';
import {render} from '@testing-library/react';

describe('AppModals', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<AppModals />);
    expect(baseElement).toBeTruthy();
  });
});
