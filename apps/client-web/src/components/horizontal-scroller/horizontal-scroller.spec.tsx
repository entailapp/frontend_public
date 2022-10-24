import {HorizontalScroller} from './horizontal-scroller';
import React from 'react';
import {render} from '@testing-library/react';

describe('HorizontalScroller', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<HorizontalScroller />);
    expect(baseElement).toBeTruthy();
  });
});
