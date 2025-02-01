import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconBaseProps } from '../../components/Icon';

export default function Home({size = 20, color = 'black'}: IconBaseProps) {
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
      d="M11.1413 2.09386C10.1325 1.42714 8.86754 1.42714 7.8587 2.09387L2.98691 5.31369C2.03994 5.93956 1.46154 7.05939 1.46154 8.26694V14.9529C1.46154 16.8601 2.87931 18.4062 4.6282 18.4062H5.84615V14.9529C5.84615 12.7523 7.48199 10.9684 9.5 10.9684C11.518 10.9684 13.1538 12.7523 13.1538 14.9529V18.4062H14.3718C16.1207 18.4062 17.5385 16.8601 17.5385 14.9529V8.26694C17.5385 7.05939 16.9601 5.93956 16.0131 5.3137L11.1413 2.09386C11.1413 2.09386 11.1413 2.09386 11.1413 2.09386ZM11.6923 18.4062V14.9529C11.6923 13.6325 10.7108 12.5622 9.5 12.5622C8.28918 12.5622 7.30769 13.6325 7.30769 14.9529V18.4062H11.6923ZM7.1012 0.730824C8.57563 -0.243608 10.4244 -0.243609 11.8988 0.730826L16.7706 3.95066C18.1547 4.8654 19 6.50207 19 8.26694V14.9529C19 17.7403 16.9278 20 14.3718 20H4.6282C2.07211 20 0 17.7403 0 14.9529V8.26694C0 6.50207 0.845352 4.8654 2.22939 3.95066L7.1012 0.730824Z"
      fill={color}
    />
  </Svg>
  );
}
