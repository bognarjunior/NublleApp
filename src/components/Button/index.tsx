import { ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from '../Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../Box';

interface ButtonProps {
  title: string;
  loading?: boolean
}
export default function Button({ title, loading }: ButtonProps) {

  return (
    <Box
      backgroundColor={'buttonPrimary'}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
    >
      {loading ? <ActivityIndicator /> :
        <Text preset="paragraphMedium" bold style={{ color: '#FFFFFF' }}>{title}</Text>
      }
    </Box>
  );
}
