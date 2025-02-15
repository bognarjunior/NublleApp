import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import { AuthScreenProps } from '@routes';

import { loginSchema, LoginSchemaType } from './schema';

export function Login({navigation}: AuthScreenProps<'Login'>) {

  const { control, handleSubmit, formState } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginSchemaType) {
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

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{mb:'s20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{mb:'s20'}}
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
