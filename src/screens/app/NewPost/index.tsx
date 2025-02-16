import React from 'react';

import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export  function NewPost({ navigation }: AppTabScreenProps<'NewPost'>) {
  return (
    <Screen>
      <Text preset="headingSmall">New Post</Text>
    </Screen>
  );
}
