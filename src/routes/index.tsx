import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import SingUp from '../screens/auth/SingUp';
import Success from '../screens/auth/Success';

export type RootStackParamList = {
  Login: undefined;
  SingUp: undefined;
  Success: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Router() {
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
