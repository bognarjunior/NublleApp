import { createTheme } from '@shopify/restyle';

export const palette = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  black: '#000000',
  black60: 'rgba(0,0,0,0.6)',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',

  white: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.white,

    background: palette.white,
    backgroundContrast: palette.black,

    buttonPrimary: palette.greenPrimary,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
    s36: 36,
    s40: 40,
    s44: 44,
    s48: 48,
    s52: 52,
    s56: 56,
    s60: 60,
    s64: 64,
    s68: 68,
    s72: 72,
  },
  borderRadii: {},
});

export type Theme = typeof theme;
