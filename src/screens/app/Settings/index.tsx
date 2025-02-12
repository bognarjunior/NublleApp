import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from 'src/routes/appStack';

import { Screen, Text } from '@components';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'Settings'>;
export  function Settings({ navigation }: ScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings</Text>
    </Screen>
  );
}
