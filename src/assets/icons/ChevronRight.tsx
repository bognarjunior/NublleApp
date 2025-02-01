
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconBaseProps } from '../../components/Icon';

export default function ChevronRight({size = 20, color = 'black'}: IconBaseProps) {
  return (
    <Svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4L14 10L7 16"
      fill={color}
    />
  </Svg>
  );
}
