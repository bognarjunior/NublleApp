import React, { ReactNode } from 'react';
import { Box, TouchableOpacityBox } from '../Box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon';
import { Text } from '../Text';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollViewContainer, ViewContainer } from './component/ScreenContainer';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useNavigation } from '@react-navigation/native';

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
