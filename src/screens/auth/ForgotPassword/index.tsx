import React from 'react';
import Screen from '../../../components/Screen';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes';
import { useAppResetNavigationSuccess } from '../../../hooks/useAppResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

export default function ForgotPassword({navigation}: ScreenProps) {

  const { reset } = useAppResetNavigationSuccess();

  function submitForm() {
    reset({
      title: 'Enviamos  instruções para o seu e-mail',
      description: 'Click no link enviado no seu e-mail para recuperar sua senha.',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">Esqueci a minha senha</Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        boxProps={{mb:'s40'}}
        placeholder="Digite seu e-mail"
        label="E-mail"
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}
