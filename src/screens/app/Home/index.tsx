import React from 'react';

import { Button, Screen, Text } from '@components';
import {  AppTabScreenProps } from '@routes';

export  function Home({ navigation }: AppTabScreenProps<'Home'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home</Text>
      <Button mb="s16" title="Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Favorites" onPress={() => navigation.navigate('Favorite')} />
    </Screen>
  );
}
