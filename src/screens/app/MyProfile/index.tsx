import React from 'react';

import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export  function MyProfile({ navigation }: AppTabScreenProps<'MyProfile'>) {
  return (
    <Screen>
      <Text preset="headingSmall">My Profile</Text>
    </Screen>
  );
}
