import React from 'react';
import { Text } from '../Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box';
import { ActivityIndicator } from '../ActivityIndicator';
import { buttonPresets } from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps{
  title: string;
  loading?: boolean;
  preset?: ButtonPreset,
  disabled?: boolean
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpactyBoxProps
}: ButtonProps) {

  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="br12"
      {...touchableOpactyBoxProps }
      {...buttonPreset.container}
    >
      {loading ? <ActivityIndicator color="white" /> :
        <Text preset="paragraphMedium" color={buttonPreset.content} bold >{title}</Text>
      }
    </TouchableOpacityBox>
  );
}
