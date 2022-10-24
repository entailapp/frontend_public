import {Tabs, TabsProps} from '@material-ui/core';

import {HorizontalScrollerButton} from './horizontal-scroller-button/horizontal-scroller-button';
import React from 'react';

export interface HorizontalScrollerProps {
  children?: TabsProps['children'];
}

/**
 * A component which can hold arbitrary horizontal content, displaying left and
 * right arrows to scroll through the content when it grows larger than the
 * viewport.
 */
export function HorizontalScroller(props: HorizontalScrollerProps) {
  return (
    <Tabs
      classes={{
        root: 'relative',
      }}
      value={false}
      variant="scrollable"
      scrollButtons="on"
      ScrollButtonComponent={HorizontalScrollerButton}
      {...props}
    />
  );
}

export default HorizontalScroller;
