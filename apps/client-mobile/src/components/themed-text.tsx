import {Text as DefaultText} from 'react-native';

import React from 'react';
import tailwind from '../tailwind';
import useTheme from '../hooks/use-theme';

export type TextProps = DefaultText['props'];

export function Text(props: TextProps) {
  const {style, ...rest} = props;

  const isDarkMode = useTheme() === 'dark';

  return (
    <DefaultText
      style={[
        {
          fontFamily: 'Inter_400Regular',
        },
        isDarkMode
          ? tailwind('text-main-text-dark')
          : tailwind('text-main-text-light'),
        style,
      ]}
      {...rest}
    />
  );
}
