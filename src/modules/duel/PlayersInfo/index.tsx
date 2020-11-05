import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { Box, Progress, Text, Image, Stack, Flex } from '@chakra-ui/core';

import { PlayerVitalsProps } from './types';

export const PlayersInfo: React.FC = () => {
  return (
    <Box
      pos="fixed"
      zIndex={1}
      top="8px"
      left="50%"
      transform="translateX(-50%)"
    >
      <Stack isInline spacing={3}>
        <PlayerVitals />
        <TurnInfo />
        <PlayerVitals isOpponentVitals />
      </Stack>
    </Box>
  );
};

const TurnInfo: React.FC = () => {
  return (
    <Box>
      <Box
        w="85px"
        h="55px"
        bg="white"
        d="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        border="solid 3px"
        color="gray.700"
      >
        <Text
          fontWeight="bold"
          fontSize="sm"
          textTransform="uppercase"
          mb="-9px"
        >
          Turn
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          3
        </Text>
      </Box>

      <Box
        w="85px"
        bg="gray.700"
        p="1px 0 4px 0"
        d="flex"
        alignItems="center"
        justifyContent="flex-start"
        fontSize="xs"
        fontWeight="bold"
        textColor="white"
      >
        <Box
          width="30px"
          fontSize="md"
          d="flex"
          mr="8px"
          alignItems="center"
          justifyContent="flex-end"
        >
          <AiOutlineClockCircle />
        </Box>
        <Text>123</Text>
      </Box>
    </Box>
  );
};

const PlayerVitals: React.FC<PlayerVitalsProps> = ({ isOpponentVitals }) => {
  return (
    <Box
      d="flex"
      flexDir={isOpponentVitals ? 'row-reverse' : 'row'}
      alignItems="flex-start"
    >
      <Flex
        w="140px"
        m={isOpponentVitals ? '0 0 0 12px' : '0 12px 0 0'}
        bg="purple.600"
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
      <Image
        w="65px"
        h="65px"
        borderRadius="8px"
        border="solid 2px"
        borderColor="purple.500"
        src="https://images.8tracks.com/avatar/i/012/060/029/dsod_icon-227.png?rect=0,0,600,600&q=98&fm=jpg&fit=max"
      />
    </Box>
  );
};
