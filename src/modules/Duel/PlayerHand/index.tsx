import React from 'react';

import { Box, Stack } from '@chakra-ui/core';

import { BaseCard } from '~/cards/base-card';
import { MotionBox } from '~/components/MotionBox';

import { usePlayerHand, usePlayerMonsterZone } from '../hooks';

export const PlayerHand: React.FC = () => {
  const hand = usePlayerHand();
  const { placeMonster } = usePlayerMonsterZone();

  const handleCardClick = (index: number, card: BaseCard) => {
    placeMonster(index, card);
  };

  return (
    <Box pos="fixed" bottom="10px">
      <Stack isInline spacing={1}>
        {hand.map((card, i) => (
          <MotionBox
            key={String(i)}
            boxProps={{
              pos: 'relative',
              bgImg: `url(${card.info.image_url})`,
              bgSize: '100% 100%',
              bgRepeat: 'no-repeat',
              w: '81px',
              h: '113px',
              onClick: () => handleCardClick(i, card),
            }}
            motionProps={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
              exit: {
                opacity: 0,
              },
              whileHover: {
                scale: 1.25,
              },
              whileTap: {
                scale: 0.9,
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};
