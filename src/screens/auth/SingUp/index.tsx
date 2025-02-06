import React from 'react';
import Screen from '../../../components/Screen';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import PasswordInput from '../../../components/PasswordInput';

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
      <PasswordInput
        placeholder="Digite sua senha"
        label="Senha"
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
