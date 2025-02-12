import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Settings } from '@screens';

export type AppStackParamList = {
  Home: undefined;
  Settings: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
