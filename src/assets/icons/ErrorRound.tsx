
import React from 'react';

import { Path, Svg } from 'react-native-svg';

import { IconBaseProps } from '../../components/Icon';

export default function ErrorRound({size = 20, color = 'black'}: IconBaseProps) {
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
      d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
      fill={color}
    />
  </Svg>
  );
}
