import React from 'react';

import { Box } from '@chakra-ui/core';

import { defaultSleeveUrl, getCardStyle, getDeckPosition } from './props';
import { DeckProps } from './types';

export const Deck: React.FC<DeckProps> = ({
  sleeveUrl,
  isOpponentDeck,
  cards,
  deckType,
  onClick,
}) => {
  const bottomShadow =
    cards.length === 0
      ? 'none'
      : `0px ${cards.length / 3}px 3px 3px rgba(0,0,0, .7)`;

  const sleeve = sleeveUrl || defaultSleeveUrl;

  return (
    <Box
      pos="absolute"
      {...getDeckPosition(isOpponentDeck, deckType)}
      w="91px"
      h="133px"
      boxShadow={bottomShadow}
    >
      <Box cursor="default" userSelect="none" onClick={onClick}>
        {[...Array(cards.length)].map((_, i) => (
          <Box
            key={String(i)}
            bgImg={`url(${sleeve})`}
            bgSize="100% 100%"
            bgRepeat="no-repeat"
            pos="absolute"
            w="91px"
            h="133px"
            borderBottom="1px solid"
            borderBottomColor={i % 3 === 0 ? 'black' : 'gray.800'}
            {...getCardStyle(isOpponentDeck, i, deckType)}
          >
            {i === cards.length - 1 && (
              <Box
                fontWeight="bolder"
                textTransform="uppercase"
                textShadow="3px 3px 1px black"
                fontSize="5xl"
                textColor="white"
                textAlign="center"
                position="absolute"
                zIndex="3"
                left="50%"
                top="50%"
                transform={`translate(-50%, -35%) scaleY(${
                  isOpponentDeck ? '-1' : '1'
                })`}
              >
                {cards.length}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
