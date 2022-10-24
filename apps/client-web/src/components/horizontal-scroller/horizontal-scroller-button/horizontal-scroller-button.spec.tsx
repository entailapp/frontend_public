import {HorizontalScrollerButton} from './horizontal-scroller-button';
import React from 'react';
import {render} from '@testing-library/react';

describe('HorizontalScrollerButton', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <HorizontalScrollerButton direction="left" orientation="horizontal" />
    );
    expect(baseElement).toBeTruthy();
  });
});
