import { TextInput as RNTextInput, TextInputProps, TextStyle } from 'react-native';
import React from 'react';
import { Box, BoxProps } from '../Box';
import { $fontFamily, $fontSizes, Text } from '../Text';
import Icon from '../Icon';
import { useAppTheme } from '../../hooks/useAppTheme';

interface Props extends TextInputProps {
  label: string
}

export default function TextInput({label, ...props}: Props) {
  const {colors} = useAppTheme();
  return (
    <Box>
      <Text
        preset="paragraphMedium"
        marginBottom="s4"
      >
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput
         placeholderTextColor={colors.gray2}
         style={$textInputStyle}
         {...props}
        />
        <Icon name="eyeOn"/>
      </Box>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
}

const $textInputContainer: BoxProps = {
  borderWidth:1,
  borderRadius:'br12',
  padding:'s16',
  borderColor:'gray4',
};
