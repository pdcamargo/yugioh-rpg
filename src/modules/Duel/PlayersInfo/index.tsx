import React from 'react';

import { Box, Text, Image, Flex } from '@chakra-ui/core';

import { useEnemyInfo, usePlayerInfo } from '../hooks';
import { PlayerVitalsProps } from './types';

export const PlayersInfo: React.FC = () => {
  const player = usePlayerInfo();
  const enemy = useEnemyInfo();
  return (
    <>
      <PlayerVitals hp={player.vitals.hp} />

      <PlayerVitals isOpponentVitals hp={enemy.vitals.hp} />
    </>
  );
};

const PlayerVitals: React.FC<PlayerVitalsProps> = ({ isOpponentVitals }) => {
  const bgColor = isOpponentVitals ? 'red.600' : 'blue.500';
  const borderColor = isOpponentVitals ? 'red.400' : 'blue.300';

  const position = isOpponentVitals
    ? { right: '30px', top: '30px' }
    : { left: '30px', bottom: '30px' };
  const margin = isOpponentVitals ? '0 12px 0 0' : '0 0 0 12px';

  return (
    <Box
      position="fixed"
      {...position}
      d="flex"
      flexDir={isOpponentVitals ? 'row' : 'row-reverse'}
      alignItems="flex-start"
    >
      <Box>
        <Flex
          w="140px"
          m={margin}
          bg={bgColor}
          border="solid 2px"
          borderColor={borderColor}
          size="lg"
          alignItems="center"
          justifyContent="center"
          borderRadius="6px"
        >
          <Text
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            textColor="white"
          >
            Player Name
          </Text>
        </Flex>

        <Flex
          w="140px"
          m={margin}
          mt={1}
          bg="linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(61,182,61,0.6054796918767507) 57%, rgba(255,255,255,0) 100%)"
          border="solid 2px"
          borderColor={borderColor}
          size="lg"
          alignItems="center"
          justifyContent="center"
          borderRadius="6px"
        >
          <Text
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            textColor="white"
          >
            LP 8000
          </Text>
        </Flex>
      </Box>
      <Image
        w="65px"
        h="65px"
        borderRadius="8px"
        border="solid 2px"
        borderColor={bgColor}
        src="https://images.8tracks.com/avatar/i/012/060/029/dsod_icon-227.png?rect=0,0,600,600&q=98&fm=jpg&fit=max"
      />
    </Box>
  );
};
