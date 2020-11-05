import React from 'react';

import { Box } from '@chakra-ui/core';

import backgroundBg from './background.jpg';
import { Battlefield } from './BattleField';
import { PlayersInfo } from './PlayersInfo';

export const Duel: React.FC = () => {
  return (
    <Box
      d="flex"
      w="100vw"
      h="100vh"
      bgImg={`url(${backgroundBg})`}
      bgSize="cover"
      justifyContent="center"
    >
      <PlayersInfo />
      <Battlefield />
    </Box>
  );
};
