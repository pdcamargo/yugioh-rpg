import { BoxProps } from '@chakra-ui/core';

import { DeckType } from './types';

export const getDeckPosition = (
  isOpponentDeck: boolean,
  deckType: DeckType
) => {
  const positions: Record<DeckType, BoxProps> = {
    [DeckType.Deck]: isOpponentDeck
      ? { left: '30px', top: '25px' }
      : { right: '30px', bottom: '89px' },
    [DeckType.Graveyard]: isOpponentDeck
      ? { left: '30px', top: '175px' }
      : { right: '30px', bottom: '244px' },
    [DeckType.Extra]: isOpponentDeck
      ? { right: '30px', top: '25px' }
      : { left: '30px', bottom: '89px' },
  };

  return positions[deckType];
};

export const getCardStyle = (
  isOpponentDeck: boolean,
  index: number,
  deckType: DeckType
) => {
  const opponentPos = {
    left: `${deckType === DeckType.Extra ? '' : '-'}${index / 2}px`,
    bottom: `${index / 1.1}px`,
    borderRight: '1px solid',
    borderRightColor: index % 2 !== 0 ? 'gray.700' : 'gray.600',
    transform: 'scaleY(-1)',
  };

  const playerPos = {
    left: `${deckType === DeckType.Extra ? '-' : ''}${index / 2}px`,
    top: `-${index / 2}px`,
    borderLeft: '1px solid',
    borderLeftColor: index % 2 !== 0 ? 'gray.700' : 'gray.600',
  };

  const zIndex: Record<DeckType, number> = {
    [DeckType.Deck]: isOpponentDeck ? 1 : 2,
    [DeckType.Graveyard]: isOpponentDeck ? 2 : 1,
    [DeckType.Extra]: isOpponentDeck ? 1 : 2,
  };

  const props = {
    zIndex: zIndex[deckType],
    ...(isOpponentDeck ? opponentPos : playerPos),
  };

  return props;
};

export const defaultSleeveUrl = '/sleeves/default-sleeve.jpg';
