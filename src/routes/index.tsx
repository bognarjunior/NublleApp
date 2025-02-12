import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { IconProps } from '@components';

import { AppStack } from './appStack';
import { AuthStack } from './authStack';

export type RootStackParamList = {
  Login: undefined;
  SingUp: undefined;
  Success: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPassword: undefined;
};

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
