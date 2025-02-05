import React, { ReactNode } from 'react';
import { Box } from '../Box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';

interface Props {
  children: ReactNode;
}
export default function Screen({children}: Props) {
  const {top} = useAppSafeArea();
  return (
    <Box
      style={{paddingTop: top}}
      paddingHorizontal="s24">
      {children}
    </Box>
  );
}
