import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from '@hooks';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppTheme();
  return {
    top: Math.max(top,spacing.s24),
    botton: Math.max(bottom, spacing.s24),
  };
}
