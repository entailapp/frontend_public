import {ProfileNav} from './profile-nav';
import React from 'react';
import {render} from '@testing-library/react';

describe('ProfileTabs', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<ProfileNav />);
    expect(baseElement).toBeTruthy();
  });
});
