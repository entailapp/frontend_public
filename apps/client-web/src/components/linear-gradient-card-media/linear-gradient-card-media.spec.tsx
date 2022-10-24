import {LinearGradientCardMedia} from './linear-gradient-card-media';
import React from 'react';
import {render} from '@testing-library/react';

describe('LinearGradientCardMedia', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<LinearGradientCardMedia />);
    expect(baseElement).toBeTruthy();
  });
});
