import React from 'react';
import Screen from '../../../components/Screen';
import { Text } from '../../../components/Text';
import Button from '../../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes';
import { useAppResetNavigationSuccess } from '../../../hooks/useAppResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import FormTextInput from '../../../components/FormTextInput';
import FormPasswordInput from '../../../components/FormPasswordInput';
import { singUpSchema, SingUpSchemaType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';



type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUp'>;

export default function SingUp({navigation}: ScreenProps) {

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
