import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IconProps } from '@components';
import {
  Login,
  SingUp,
  Success,
  ForgotPassword,
} from '@screens';

export type AuthStackParamList = {
  Login: undefined;
  SingUp: undefined;
  Success: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
