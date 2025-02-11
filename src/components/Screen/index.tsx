import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Box,
  TouchableOpacityBox,
  Icon,
  Text,
} from '@components';

import {
  useAppTheme,
  useAppSafeArea,
 } from '@hooks';

import { ScrollViewContainer, ViewContainer } from './component/ScreenContainer';

interface Props {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}
export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: Props) {
  const {top, botton} = useAppSafeArea();
  const {colors} = useAppTheme();

  const { goBack } = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}
    >
      <Container backgroundColor={colors.background}>
        <TouchableOpacityBox
          onPress={goBack}
          style={{paddingTop: top, paddingBottom: botton}}
          paddingHorizontal="s24"
          paddingBottom="s24"
          >
          {canGoBack && <Box mb="s24" flexDirection="row" alignItems="center">
            <Icon name="arrowLeft" color="primary" />
            <Text preset="paragraphMedium" semiBold ml="s8">Voltar</Text>
          </Box>}
          {children}
        </TouchableOpacityBox>
      </Container>
    </KeyboardAvoidingView>
  );
}
