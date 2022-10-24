import {AppPage} from './app-page';
import React from 'react';
import {render} from '@testing-library/react';

describe('AppPage', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<AppPage />);
    expect(baseElement).toBeTruthy();
  });
});
