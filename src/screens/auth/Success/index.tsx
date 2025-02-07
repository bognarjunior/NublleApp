import React from 'react';
import Screen from '../../../components/Screen';
import Icon from '../../../components/Icon';
import { Text } from '../../../components/Text';
import Button from '../../../components/Button';

export default function Success() {
  function goBack() {
    console.log('goBack');
  }
  return (
    <Screen>
      <Icon name="check" color="success" size={64} />
      <Text marginTop="s24" preset="headingLarge">Sucesso!</Text>
      <Text marginTop="s16" preset="paragraphLarge">Sua conta foi criada com sucesso.</Text>
      <Button
        onPress={goBack}
        marginTop="s40"
        title="Voltar ao início"
      />
    </Screen>
  );
}
