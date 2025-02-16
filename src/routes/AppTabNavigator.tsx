import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Favorite, Home, MyProfile, NewPost } from '@screens';

export type AppTabParamList = {
  Home: undefined,
  Favorite: undefined,
  MyProfile: undefined,
  NewPost: undefined
}

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="NewPost" component={NewPost} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  );
}
