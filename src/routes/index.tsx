import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export * from './navigationType';
export * from './AppStack';
export * from './AuthStack';
export * from './AppTabNavigator';

export default function Router() {
  const authenticated = true;
  return (
    <NavigationContainer>
      {authenticated ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
