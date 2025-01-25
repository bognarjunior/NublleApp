import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from '../Text';

interface ButtonProps {
  title: string;
}
export default function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity style={{ 
      backgroundColor: '#074C4E',
      paddingHorizontal: 20,
      paddingVertical: 14,
      alignItems: 'center',
      borderRadius: 16
      }}
    >
      <Text preset='paragraphMedium' bold style={{ color: '#FFFFFF' }}>{title}</Text>
    </TouchableOpacity>
  )
}