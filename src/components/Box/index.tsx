import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import { Theme } from '../../theme/theme';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ComponentProps } from 'react';

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
SpacingProps<Theme> &
SpacingShorthandProps<Theme> &
LayoutProps<Theme> &
BorderProps<Theme> &
TouchableOpacityProps;

export const Box = createBox<Theme>();
export type BoxProps = ComponentProps<typeof Box>;

export const TouchableOpacityBox = createRestyleComponent<
TouchableOpacityBoxProps, Theme
>([
  backgroundColor,
  spacing,
  spacingShorthand,
  layout,
  border,
], TouchableOpacity);
