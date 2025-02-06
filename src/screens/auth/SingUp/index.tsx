import React from 'react';
import Screen from '../../../components/Screen';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Icon from '../../../components/Icon';
import Button from '../../../components/Button';

export default function SingUp() {
  function submitForm() {
    console.log('submitForm');
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">Criar uma conta</Text>
      <TextInput
        boxProps={{mb:'s20'}}
        placeholder="@"
        label="Usuário"
      />
      <TextInput
        boxProps={{mb:'s20'}}
        placeholder="Digite seu nome completo"
        label="Nome Completo"
      />
      <TextInput
        boxProps={{mb:'s20'}}
        placeholder="Digite seu e-mail"
        label="E-mail"
      />
      <TextInput
        placeholder="Digite sua senha"
        label="Senha"
        RightComponent={<Icon color="gray2" name="eyeOn" />}
        boxProps={{mb:'s48'}}
      />
      <Button
        onPress={submitForm}
        title="Criar uma conta"
        preset="primary"
        marginTop="s12"
      />
    </Screen>
  );
}
