import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from 'src/routes/appStack';

import { Button, Screen, Text } from '@components';


type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

export  function Home({ navigation }: ScreenProps) {
  return (
    <Screen>
      <Text preset="headingLarge">Home</Text>
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </Screen>
  );
}
