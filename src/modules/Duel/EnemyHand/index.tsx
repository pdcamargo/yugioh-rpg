import React, { useMemo } from 'react';

import { Box, Stack } from '@chakra-ui/core';

import { MotionBox } from '~/components/MotionBox';

import { useEnemyHand, useEnemyInfo } from '../hooks';

export const EnemyHand: React.FC = () => {
  const hand = useEnemyHand();
  const { cardSleeve } = useEnemyInfo();
  const handCards = useMemo(
    () => (
      <Stack isInline spacing={1}>
        {hand.map((_, i) => (
          <MotionBox
            key={String(i)}
            pos="relative"
            bgImg={`url(${cardSleeve})`}
            bgSize="100% 100%"
            bgRepeat="no-repeat"
            w="81px"
            h="113px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        ))}
      </Stack>
    ),
    [hand, cardSleeve]
  );

  return <Box pos="absolute">{handCards}</Box>;
};
