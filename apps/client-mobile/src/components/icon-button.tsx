// import {Pressable, StyleProp, ViewStyle} from 'react-native';
// import tailwind, {getColor} from '../tailwind';

// import {Ionicons} from '@expo/vector-icons';
// import React from 'react';

// export type IconButtonProps = {
//   onPress: () => void;
//   icon: keyof typeof Ionicons.glyphMap;
//   style?: StyleProp<ViewStyle>;
// };

// export default function IconButton(props: IconButtonProps) {
//   const DEFAULT_STYLE = tailwind(
//     'bg-yellow w-10 h-10 rounded-lg items-center justify-center'
//   );

//   const PRESSED_STYLE = tailwind(
//     'bg-dark-yellow w-10 h-10 rounded-lg items-center justify-center'
//   );

//   return (
//     <Pressable
//       style={({pressed}) => [
//         pressed ? PRESSED_STYLE : DEFAULT_STYLE,
//         props.style,
//       ]}
//       onPress={props.onPress}
//     >
//       <Ionicons name={props.icon} size={22} color={getColor('bucket-dark')} />
//     </Pressable>
//   );
// }
