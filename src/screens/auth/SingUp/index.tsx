import React from 'react';
import { Alert } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';


import {
  Text,
  FormTextInput,
  FormPasswordInput,
  Screen,
  Button,
} from '@components';
import { useAppResetNavigationSuccess } from '@hooks';
import { RootStackParamList } from '@routes';

import { singUpSchema, SingUpSchemaType } from './schema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUp'>;

export function SingUp({navigation}: ScreenProps) {

  const { reset } = useAppResetNavigationSuccess();
  const { control, handleSubmit, formState } = useForm<SingUpSchemaType>({
    resolver: zodResolver(singUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: SingUpSchemaType) {
    Alert.alert('Conta criada com sucesso!', data.username);
    console.log(data);
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma.',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });

  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">Criar uma conta</Text>

      <FormTextInput
        control={control}
        name="username"
        placeholder="@"
        label="Usuário"
        boxProps={{mb:'s20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        placeholder="Digite seu nome completo"
        label="Nome Completo"
        boxProps={{mb:'s20'}}
      />

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
        boxProps={{mb:'s48'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
        preset="primary"
        marginTop="s12"
      />
    </Screen>
  );
}
