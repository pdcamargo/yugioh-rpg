import React, { useMemo } from 'react';

import { Box, Stack } from '@chakra-ui/core';

import { MotionBox } from '~/components/MotionBox';
import { useWindowSize } from '~/hooks';

import { useEnemyHand, useEnemyInfo } from '../hooks';

export const EnemyHand: React.FC = () => {
  const hand = useEnemyHand();
  const { cardSleeve } = useEnemyInfo();
  const { height } = useWindowSize();

  const responsiveProps = {
    top: height <= 730 ? '14px' : '105px',
  };

  const handCards = useMemo(
    () => (
      <Stack isInline spacing={1}>
        {hand.map((_, i) => (
          <MotionBox
            key={String(i)}
            boxProps={{
              pos: 'relative',
              bgImg: `url(${cardSleeve})`,
              bgSize: '100% 100%',
              bgRepeat: 'no-repeat',
              w: '60px',
              h: '80px',
            }}
            motionProps={{
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
            }}
          />
        ))}
      </Stack>
    ),
    [hand, cardSleeve]
  );

  return (
    <Box pos="absolute" top={responsiveProps.top}>
      {handCards}
    </Box>
  );
};
