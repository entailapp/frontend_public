import {Pressable, StyleProp, TextStyle, ViewStyle} from 'react-native';

import React from 'react';
import {Text} from './themed-text';
import tailwind from '../tailwind';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function Button(props: ButtonProps) {
  const DEFAULT_STYLE = tailwind(
    'bg-yellow px-4 py-2 rounded-lg items-center justify-center'
  );

  const PRESSED_STYLE = tailwind(
    'bg-dark-yellow px-4 py-2 rounded-lg items-center justify-center'
  );

  return (
    <Pressable
      style={({pressed}) => [
        pressed ? PRESSED_STYLE : DEFAULT_STYLE,
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text
        style={[
          tailwind('text-bucket-dark text-base font-bold'),
          props.textStyle,
        ]}
      >
        {props.text}
      </Text>
    </Pressable>
  );
}
