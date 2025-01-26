import { ActivityIndicator } from 'react-native';
import React from 'react';
import { Text } from '../Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box';

interface ButtonProps extends TouchableOpacityBoxProps{
  title: string;
  loading?: boolean
}
export default function Button({ title, loading, ...touchableOpactyBoxProps }: ButtonProps) {

  return (
    <TouchableOpacityBox
      backgroundColor={'buttonPrimary'}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="br12"
      {...touchableOpactyBoxProps }
    >
      {loading ? <ActivityIndicator /> :
        <Text preset="paragraphMedium" bold style={{ color: '#FFFFFF' }}>{title}</Text>
      }
    </TouchableOpacityBox>
  );
}
