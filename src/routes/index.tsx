import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './appStack';
import { AuthStack } from './authStack';

export * from './navigationType';
export * from './appStack';
export * from './authStack';

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
