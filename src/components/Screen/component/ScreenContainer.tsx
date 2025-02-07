import { ScrollView, View } from 'react-native';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}
export function ScrollViewContainer({children, backgroundColor}: Props) {
  const $style = {backgroundColor, flex: 1};
  return <ScrollView
    keyboardShouldPersistTaps="handled"
    style={$style}
  >
    {children}
  </ScrollView>;
}

export function ViewContainer({children, backgroundColor}: Props) {
  const $style = {backgroundColor, flex: 1};
  return <View style={$style}>{children}</View>;
}

