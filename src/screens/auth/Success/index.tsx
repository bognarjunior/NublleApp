import React from 'react';
import Screen from '../../../components/Screen';
import Icon from '../../../components/Icon';
import { Text } from '../../../components/Text';
import Button from '../../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>;

export default function Success({route, navigation}: ScreenProps) {
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
