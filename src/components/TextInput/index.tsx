import { Pressable, TextInput as RNTextInput, TextInputProps, TextStyle } from 'react-native';
import React, { ReactElement, useRef } from 'react';
import { Box, BoxProps } from '../Box';
import { $fontFamily, $fontSizes, Text } from '../Text';
import { useAppTheme } from '../../hooks/useAppTheme';

interface Props extends TextInputProps {
  label: string;
  errorMessage?: string;
  boxProps?: BoxProps;
  RightComponent?: ReactElement;
}

export default function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...props
}: Props) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:'br12',
    padding:'s16',
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text
          preset="paragraphMedium"
          marginBottom="s4"
        >
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...props}
          />
          {RightComponent &&
            <Box ml="s16">
              {RightComponent}
            </Box>
          }
        </Box>
        {errorMessage &&
          <Text
            preset="paragraphSmall"
            color="error"
            marginTop="s4"
            bold
          >
              {errorMessage}
            </Text>
        }
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};


