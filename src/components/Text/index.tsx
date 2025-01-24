import { View, Text as RNText, TextProps } from 'react-native';
import React from 'react';

export function Text({ children, ...rest }: TextProps) {
  return (
    <View>
      <RNText {...rest}>{children}</RNText>
    </View>
  );
}
