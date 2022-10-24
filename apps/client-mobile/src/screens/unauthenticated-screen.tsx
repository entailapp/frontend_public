import {TextInput, View} from 'react-native';

import Button from '../components/button';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IconUser} from 'iconic-icons-rn';
import {Text} from '../components/themed-text';
import tailwind from '../tailwind';
import useAuthentication from '../hooks/use-authentication';
import useTheme from '../hooks/use-theme';
import {calculatePasswordStrength} from '@entail/business-logic';

/**
 * The UnauthenticatedScreen is responsible for sign in and sign up flows. It will
 * have its own navigation stack for navigating between the splash screen, sign in
 * screen and sign up screens.
 */
export default function UnauthenticatedScreen() {
  const isDarkMode = useTheme() === 'dark';
  const auth = useAuthentication();
  const [strength, setStrength] = React.useState(0);

  return (
    <SafeAreaView
      style={[
        tailwind('flex-1 items-center'),
        isDarkMode ? tailwind('bg-base-dark') : tailwind('bg-base-light'),
      ]}
    >
      <Text style={tailwind('text-4xl')}>Inter</Text>
      <Text style={tailwind('text-4xl font-bold mb-4')}>Inter Bold</Text>

      <IconUser />
      <IconUser />
      <IconUser />

      <View style={tailwind('flex-row mb-4')}>
        <View style={tailwind('bg-red w-12 h-12 mr-4')} />
        <View style={tailwind('bg-yellow w-12 h-12 mr-4')} />
        <View style={tailwind('bg-orange w-12 h-12')} />
      </View>
      <View style={tailwind('flex-row mb-4')}>
        <View style={tailwind('bg-green w-12 h-12 mr-4')} />
        <View style={tailwind('bg-blue w-12 h-12 mr-4')} />
        <View style={tailwind('bg-indigo w-12 h-12')} />
      </View>
      <View style={tailwind('flex-row mb-4')}>
        <View style={tailwind('bg-violet w-12 h-12 mr-4')} />
        <View style={tailwind('bg-pink w-12 h-12 mr-4')} />
        <View style={tailwind('bg-white w-12 h-12')} />
      </View>

      <View style={tailwind('flex-row mx-4')}>
        <Button
          onPress={() => {
            auth.setIsLoggedIn(true);
          }}
          text="Press To Log In"
          style={tailwind('mr-4 flex-grow')}
        />
        {/* <IconButton onPress={() => {}} icon="checkmark-sharp" /> */}
      </View>

      <Text>Password Strength Test</Text>
      <TextInput
        style={tailwind('w-full h-12 bg-white')}
        onChangeText={text => {
          setStrength(calculatePasswordStrength(text));
        }}
      />
      <Text style={tailwind('text-xl text-red')}>{strength}</Text>
    </SafeAreaView>
  );
}
