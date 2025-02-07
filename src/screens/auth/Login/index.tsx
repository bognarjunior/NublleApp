import React from 'react';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Screen from '../../../components/Screen';
import PasswordInput from '../../../components/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export default function Login({navigation}: ScreenProps) {

  function navigateTo(){
    navigation.navigate('SingUp');
  }
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">Olá</Text>
      <Text marginBottom="s40" preset="paragraphLarge">Digite seu e-mail e senha para entrar</Text>
      <TextInput
        boxProps={{mb:'s20'}}
        errorMessage="E-mail inválido"
        placeholder="Digite seu e-mail"
        label="E-mail"
      />

      <PasswordInput
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{mb:'s10'}}
      />

      <Text
        preset="paragraphSmall"
        bold
        color="primary"
      >
        Esqueci minha senha
      </Text>
      <Button
        title="Entrar"
        preset="primary"
        marginTop="s48"
      />
      <Button
        onPress={navigateTo}
        title="Criar uma conta"
        preset="outline"
        marginTop="s12"
      />
    </Screen>
  );
}
