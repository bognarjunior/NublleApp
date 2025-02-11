import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Text,
  Icon,
  Screen,
  Button,
} from '@components';
import { RootStackParamList } from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>;

export function Success({route, navigation}: ScreenProps) {
  function goBack() {
    navigation.goBack();
  }
  const {title, description, icon} = route.params;
  return (
    <Screen>
      <Icon {...icon} size={64} />
      <Text
        marginTop="s24"
        preset="headingLarge"
      >{title}</Text>
      <Text
        marginTop="s16"
        preset="paragraphLarge"
      >{description}</Text>
      <Button
        onPress={goBack}
        marginTop="s40"
        title="Voltar ao início"
      />
    </Screen>
  );
}
