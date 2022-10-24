import {ChevronLeftIcon, ChevronRightIcon} from '@iconicicons/react';
import {TabScrollButton, TabScrollButtonProps} from '@material-ui/core';

import React from 'react';
import clsx from 'clsx';

export type HorizontalScrollerButtonProps = TabScrollButtonProps;

/**
 * Button which appears on the left and right sides of the horizontal scroller.
 */
export function HorizontalScrollerButton(props: HorizontalScrollerButtonProps) {
  const {direction} = props;
  const isLeft: boolean = direction === 'left';

  return (
    <TabScrollButton
      {...props}
      className={clsx(
        'absolute bg-black bg-opacity-40 z-10 backdrop-filter backdrop-blur inset-y-1/2 transform -translate-y-1/2 rounded-full hover:bg-gray-700 hover:bg-opacity-40',
        {
          'left-0 ml-8': isLeft,
          'right-0 mr-8': !isLeft,
        }
      )}
      style={{width: 48, height: 48}}
    >
      {isLeft && <ChevronLeftIcon />}
      {!isLeft && <ChevronRightIcon />}
    </TabScrollButton>
  );
}

export default HorizontalScrollerButtonProps;
