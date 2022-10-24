import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import useAuthentication, {
  AuthenticationProvider,
} from './hooks/use-authentication';

import AppLoading from 'expo-app-loading';
import AuthenticatedScreen from './screens/authenticated-screen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import UnauthenticatedScreen from './screens/unauthenticated-screen';

/**
 * Selects between either the unauthenticated view (log in/sign up) or the
 * authenticated view (rest of the app) based on whether the user is signed in
 * or not.
 */
function AuthenticationController() {
  const auth = useAuthentication();
  return auth.isLoggedIn ? <AuthenticatedScreen /> : <UnauthenticatedScreen />;
}

/**
 * Main app entry point, loads assets and does other initialization before rendering
 * the main content of the app.
 */
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    /**
     * SafeAreaProvider - Support for SafeAreaView
     *  - NavigationContainer - Support for react-navigation
     *    - AuthenticationProvider - Provides the authentication context.
     *      - StatusBar - Allows for styling the systems status bar.
     *      - AuthenticationController - Renders the correct view based on auth state.
     */
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthenticationProvider>
            <StatusBar style="auto" />
            <AuthenticationController />
          </AuthenticationProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
