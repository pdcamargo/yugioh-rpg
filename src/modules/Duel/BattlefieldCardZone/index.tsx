import React from 'react';

import { Stack } from '@chakra-ui/core';

export const BattlefieldCardZone: React.FC = ({ children }) => {
  return (
    <Stack isInline spacing="40px" w="626px" h="144px">
      {children}
    </Stack>
  );
};
