import React, { ReactNode } from 'react';
import { Box } from '../Box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import Icon from '../Icon';
import { Text } from '../Text';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollViewContainer, ViewContainer } from './component/ScreenContainer';
import { useAppTheme } from '../../hooks/useAppTheme';

interface Props {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}
export default function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: Props) {
  const {top, botton} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          style={{paddingTop: top, paddingBottom: botton}}
          paddingHorizontal="s24"
          paddingBottom="s24"
          >
          {canGoBack && <Box mb="s24" flexDirection="row" alignItems="center">
            <Icon name="arrowLeft" color="primary" />
            <Text preset="paragraphMedium" semiBold ml="s8">Voltar</Text>
          </Box>}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
