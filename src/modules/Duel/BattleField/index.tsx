import React from 'react';

import { Box, Stack, Text } from '@chakra-ui/core';

import { useWindowSize } from '~/hooks';

import { BattlefieldDecks } from '../BattlefieldDecks';
import { EnemyFields } from '../EnemyFields';
import { useField } from '../hooks';
import { PlayerFields } from '../PlayerFields';
import { Playmat } from '../Playmat';
import battlefieldBg from './battlefield.png';

export const Battlefield: React.FC = () => {
  const field = useField();
  const { height } = useWindowSize();

  const responsiveProps = {
    marginTop: height <= 730 ? '-80px' : '0',
    zoom: height <= 730 ? '0.85' : '1',
  };

  return (
    <Box
      style={{
        perspective: '3000px',
        perspectiveOrigin: '40% 0',
        ...responsiveProps,
      }}
    >
      <Box w="auto" h="auto" transform="rotateX(60deg)" p="20px" pos="relative">
        <Box
          w="900px"
          h="908px"
          pos="relative"
          d="flex"
          flexDir="column"
          justifySelf="center"
          alignSelf="center"
          bgImg={`url(${battlefieldBg})`}
          bgSize="contain"
          bgRepeat="no-repeat"
        >
          <Stack spacing="255px">
            <EnemyFields />

            <PlayerFields />
          </Stack>
        </Box>

        <CurrentTurn />

        <Playmat isOpponentPlaymat imgUrl={field.enemy.playmat} />
        <Playmat imgUrl={field.player.playmat} />

        <BattlefieldDecks />
      </Box>
    </Box>
  );
};

export const CurrentTurn: React.FC = () => {
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      pos="absolute"
      left="150px"
      top="47%"
      transform="translateY(-50%)"
      bg="purple.700"
      border="solid 3px white"
      borderRadius="8px"
      padding="8px"
      boxShadow="0px 7px 9px 5px rgba(0,0,0, .75)"
    >
      <Text
        fontSize="2xl"
        textTransform="uppercase"
        fontWeight="bolder"
        textColor="white"
        textAlign="center"
        mt="-4px"
      >
        23°
      </Text>
      <Text
        fontSize="sm"
        textTransform="uppercase"
        fontWeight="bolder"
        textColor="white"
        textAlign="center"
      >
        Turno
      </Text>
    </Box>
  );
};
