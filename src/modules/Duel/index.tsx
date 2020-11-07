import React, { useState } from 'react';

import { Box } from '@chakra-ui/core';

import backgroundBg from './background.jpg';
import { Battlefield } from './BattleField';
import DuelContext from './context';
import { EnemyHand } from './EnemyHand';
import { PlayerHand } from './PlayerHand';
import { PlayersInfo } from './PlayersInfo';
import { defaultField } from './props';
import { Field } from './types';

export const Duel: React.FC = () => {
  const [field, setField] = useState(defaultField);

  const updateField = (newValues: Partial<Field>) => {
    setField({ ...field, ...newValues });
  };

  return (
    <DuelContext.Provider value={{ field, updateField }}>
      <Box
        d="flex"
        w="100vw"
        h="100vh"
        overflow="hidden"
        bgImg={`url(${backgroundBg})`}
        bgSize="cover"
        justifyContent="center"
      >
        <EnemyHand />

        <PlayersInfo />
        <Battlefield />
        <PlayerHand />
      </Box>
    </DuelContext.Provider>
  );
};
