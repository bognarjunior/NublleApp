import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export  function Home({ navigation }: AppScreenProps<'Home'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home</Text>
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </Screen>
  );
}
