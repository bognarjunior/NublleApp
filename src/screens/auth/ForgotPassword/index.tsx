import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Text,
  Screen,
  FormTextInput,
  Button,
} from '@components';
import { useAppResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';

import { ForgotPasswordSchemaType, forgotPasswordSchema } from './schema';

export function ForgotPassword({navigation}: AuthScreenProps<'ForgotPassword'>) {

  const { reset } = useAppResetNavigationSuccess();
  const { control, handleSubmit, formState } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm(values: ForgotPasswordSchemaType) {
    console.log(values);
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

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{mb:'s40'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
