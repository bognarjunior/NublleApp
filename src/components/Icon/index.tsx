import React from 'react';
import EyeOn from '../../assets/icons/EyeOn';
import EyeOff from '../../assets/icons/EyeOff';
import { ThemeColors } from '../../theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';
import Trash from '../../assets/icons/Trash';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import ArrowRight from '../../assets/icons/ArrowRight';
import Bell from '../../assets/icons/Bell';
import BellOn from '../../assets/icons/BellOn';
import Bookmark from '../../assets/icons/Bookmark';

export interface IconBaseProps {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export default function Icon({
  name,
  color = 'backgroundContrast',
  size,
}: Props) {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  bell: Bell,
  bellOn: BellOn,
  bookmark: Bookmark,
  eyeOn:EyeOn,
  eyeOff: EyeOff,
  trash: Trash,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
