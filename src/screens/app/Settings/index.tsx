import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export  function Settings({navigation}: AppScreenProps<'Settings'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings</Text>
      <Button title="New Post" onPress={() => navigation.navigate('AppTabNavigator', {
        screen: 'NewPost',
      })} />
    </Screen>
  );
}
