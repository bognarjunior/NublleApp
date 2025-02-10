import React from 'react';
import Screen from '../../../components/Screen';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import PasswordInput from '../../../components/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes';
import { useAppResetNavigationSuccess } from '../../../hooks/useAppResetNavigationSuccess';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

type SingUpFormProps = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUp'>;

export default function SingUp({navigation}: ScreenProps) {

  const { reset } = useAppResetNavigationSuccess();
  const { control, handleSubmit, formState } = useForm<SingUpFormProps>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: SingUpFormProps) {
    Alert.alert('Conta criada com sucesso!', data.username);
    console.log(data);
    /* reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma.',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    }); */

  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">Criar uma conta</Text>
      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Usuário obrigatório',
        }}
        render={({ field, fieldState }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            boxProps={{mb:'s20'}}
            errorMessage={fieldState.error?.message}
            placeholder="@"
            label="Usuário"
          />
        )}
      />
      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'Nome completo obrigatório',
        }}
        render={({ field, fieldState }) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            boxProps={{mb:'s20'}}
            errorMessage={fieldState.error?.message}
            placeholder="Digite seu nome completo"
            label="Nome Completo"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
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
            boxProps={{mb:'s48'}}
            errorMessage={fieldState.error?.message}
            placeholder="Digite sua senha"
            label="Senha"
          />
        )}
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
