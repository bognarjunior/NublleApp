import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Controller, useForm } from 'react-hook-form';

import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Screen from '../../../components/Screen';
import PasswordInput from '../../../components/PasswordInput';
import { RootStackParamList } from '../../../routes';
type LoginFormProps = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export default function Login({navigation}: ScreenProps) {

  const { control, handleSubmit, formState } = useForm<LoginFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginFormProps) {
    console.log(email, password);
  }
  function navigateToSingUp(){
    navigation.navigate('SingUp');
  }
  function navigateToForgotPassword(){
    navigation.navigate('ForgotPassword');
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">Olá</Text>
      <Text marginBottom="s40" preset="paragraphLarge">Digite seu e-mail e senha para entrar</Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'E-mail inválido',
          },
        }}
        render={({ field, fieldState }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            boxProps={{mb:'s20'}}
            errorMessage={fieldState.error?.message}
            placeholder="Digite seu e-mail"
            label="E-mail"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({ field, fieldState }) => (
          <PasswordInput
            value={field.value}
            onChangeText={field.onChange}
            boxProps={{mb:'s10'}}
            errorMessage={fieldState.error?.message}
            placeholder="Digite sua senha"
            label="Senha"
          />
        )}
      />

      <Text
        onPress={navigateToForgotPassword}
        preset="paragraphSmall"
        bold
        color="primary"
      >
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Entrar"
        preset="primary"
        marginTop="s48"
      />
      <Button
        onPress={navigateToSingUp}
        title="Criar uma conta"
        preset="outline"
        marginTop="s12"
      />
    </Screen>
  );
}
