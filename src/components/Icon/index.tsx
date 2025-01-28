import { View, Text } from 'react-native';
import React from 'react';
import EyeOn from '../../assets/icons/EyeOn';
import EyeOff from '../../assets/icons/EyeOff';

interface Props {
  name: IconName;
}

export default function Icon({name}: Props) {
  const SVGIcon = iconRegistry[name];
  return <SVGIcon />;
}

const iconRegistry = {
  eyeOn:EyeOn,
  eyeOff: EyeOff,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
