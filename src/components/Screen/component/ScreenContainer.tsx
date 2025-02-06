import { ScrollView, View } from 'react-native';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}
export function ScrollViewContainer({children, backgroundColor}: Props) {
  return <ScrollView
    keyboardShouldPersistTaps="handled"
    style={{backgroundColor, flex: 1}}
  >
    {children}
  </ScrollView>;
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{backgroundColor}}>{children}</View>;
}
