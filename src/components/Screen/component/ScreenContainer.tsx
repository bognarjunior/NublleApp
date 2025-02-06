import { ScrollView, View } from 'react-native';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}
export function ScrollViewContainer({children, backgroundColor}: Props) {
  return <ScrollView style={{backgroundColor}}>{children}</ScrollView>;
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{backgroundColor}}>{children}</View>;
}
