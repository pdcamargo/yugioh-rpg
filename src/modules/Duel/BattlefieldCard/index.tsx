import React from 'react';

import { Box } from '@chakra-ui/core';

import { BaseCard, CardPosition } from '~/cards/base-card';
import { MotionBox } from '~/components/MotionBox';

import { usePlayerMonsterZone } from '../hooks';
import { getBoxProps } from './props';

type BattlefieldCardProps = {
  isDefending?: boolean;
  isFaceDown?: boolean;
  isOpponentCard?: boolean;
  sleeveUrl?: string;
  card: BaseCard;
  cardPosition: CardPosition;
};

export const BattlefieldCard: React.FC<BattlefieldCardProps> = ({
  isOpponentCard,
  isDefending,
  isFaceDown,
  sleeveUrl,
  card,
  cardPosition,
}) => {
  const { changeToMode } = usePlayerMonsterZone();

  const boxProps = getBoxProps(
    isFaceDown,
    isOpponentCard,
    isDefending,
    sleeveUrl,
    card.info.image_url
  );

  const onCardClick = () => {
    if (card.info.type !== 'Monster' || isOpponentCard) return;

    changeToMode(cardPosition, isDefending ? 'attack' : 'defense');
  };

  return (
    <MotionBox
      boxProps={{
        ...boxProps,
        onClick: onCardClick,
      }}
      motionProps={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
    />
  );
};

export const EmptyCardSlot: React.FC = () => <Box w="91px" h="133px" />;
