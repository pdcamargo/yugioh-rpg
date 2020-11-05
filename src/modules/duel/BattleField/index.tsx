import React from 'react';

import { Box, Stack } from '@chakra-ui/core';

import { BattlefieldCard, EmptyCardSlot } from '../BattlefieldCard';
import battlefieldBg from './battlefield.png';
import { PlaymatProps } from './types';

export const Battlefield: React.FC = () => {
  const field = {
    player: {
      cardSleeve:
        'https://qtoptens-com.exactdn.com/wp-content/uploads/2018/02/dark_side_of_dimensions_sleeves.jpeg?strip=all&lossy=1',
      monster: {
        0: null,
        1: {
          isDefending: false,
          isFaceDown: false,
        },
        2: null,
        3: {
          isDefending: true,
          isFaceDown: true,
        },
        4: null,
      },
      spell: {
        0: null,
        1: {
          isFaceDown: true,
        },
        2: null,
        3: {
          isFaceDown: true,
        },
        4: null,
      },
    },
    enemy: {
      cardSleeve: null,
      monster: {
        0: null,
        1: {
          isDefending: false,
        },
        2: null,
        3: {
          isDefending: true,
        },
        4: null,
      },
      spell: {
        0: null,
        1: {
          isFaceDown: true,
        },
        2: null,
        3: {
          isFaceDown: false,
        },
        4: null,
      },
    },
  };

  return (
    <Box
      style={{
        perspective: '3000px',
        perspectiveOrigin: '40% 0',
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
            <Stack spacing="-3px" pos="absolute" left="142px" top="25px">
              <BattlefielCardZone>
                {Object.values(field.enemy.spell).map((spell) =>
                  spell ? (
                    <BattlefieldCard
                      isOpponentCard
                      isFaceDown={spell.isFaceDown}
                      sleeveUrl={field.enemy?.cardSleeve}
                    />
                  ) : (
                    <EmptyCardSlot />
                  )
                )}
              </BattlefielCardZone>

              <BattlefielCardZone>
                {Object.values(field.enemy.monster).map((monster) =>
                  monster ? (
                    <BattlefieldCard
                      isOpponentCard
                      isDefending={monster.isDefending}
                      isFaceDown={monster.isFaceDown}
                      sleeveUrl={field.enemy?.cardSleeve}
                    />
                  ) : (
                    <EmptyCardSlot />
                  )
                )}
              </BattlefielCardZone>
            </Stack>

            <Stack spacing="-3px" pos="absolute" left="142px" bottom="74px">
              <BattlefielCardZone>
                {Object.values(field.player.monster).map((monster) =>
                  monster ? (
                    <BattlefieldCard
                      isDefending={monster.isDefending}
                      isFaceDown={monster.isFaceDown}
                      sleeveUrl={field.player?.cardSleeve}
                    />
                  ) : (
                    <EmptyCardSlot />
                  )
                )}
              </BattlefielCardZone>

              <BattlefielCardZone>
                {Object.values(field.player.spell).map((spell) =>
                  spell ? (
                    <BattlefieldCard
                      isFaceDown={spell.isFaceDown}
                      sleeveUrl={field.player?.cardSleeve}
                    />
                  ) : (
                    <EmptyCardSlot />
                  )
                )}
              </BattlefielCardZone>
            </Stack>
          </Stack>
        </Box>

        <Playmat
          isOpponentPlaymat
          imgUrl="https://images7.alphacoders.com/875/thumb-1920-875040.jpg"
        />
        <Playmat imgUrl="https://i.pinimg.com/originals/f4/a5/2f/f4a52f3ab04fee143c0e547e472fe475.jpg" />
      </Box>
    </Box>
  );
};

export const Playmat: React.FC<PlaymatProps> = ({
  isOpponentPlaymat,
  imgUrl,
}) => {
  const topPosition = isOpponentPlaymat ? { top: '0' } : { bottom: '59px' };

  return (
    <Box
      pos="absolute"
      {...topPosition}
      w="900px"
      h="444px"
      zIndex={-1}
      backgroundImage={`url(${imgUrl})`}
      backgroundPosition="center"
      borderRadius="8px"
      border="solid 3px"
      borderColor="gray.700"
      transform={`scaleY(${isOpponentPlaymat ? '-1' : '1'})`}
    />
  );
};

export const BattlefielCardZone: React.FC = ({ children }) => {
  return (
    <Stack isInline spacing="40px" w="626px" h="144px">
      {children}
    </Stack>
  );
};
