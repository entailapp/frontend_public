import {ProfileHeader} from './profile-header';
import React from 'react';
import {render} from '@testing-library/react';

describe('ProfileHeader', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<ProfileHeader />);
    expect(baseElement).toBeTruthy();
  });
});
