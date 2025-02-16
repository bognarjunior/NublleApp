import React from 'react';

import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export  function Favorite({ navigation }: AppTabScreenProps<'Favorite'>) {
  return (
    <Screen>
      <Text preset="headingSmall">Favorite</Text>
    </Screen>
  );
}
