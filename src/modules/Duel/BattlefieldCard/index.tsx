import React from 'react';

import { Box } from '@chakra-ui/core';

import { BaseCard } from '~/cards/base-card';
import { MotionBox } from '~/components/MotionBox';

type BattlefieldCardProps = {
  isDefending?: boolean;
  isFaceDown?: boolean;
  isOpponentCard?: boolean;
  sleeveUrl?: string;
  card: BaseCard;
};

export const BattlefieldCard: React.FC<BattlefieldCardProps> = ({
  isOpponentCard,
  isDefending,
  isFaceDown,
  sleeveUrl,
  card,
}) => {
  const sleeve = sleeveUrl || '/sleeves/default-sleeve.jpg';
  const imageUrl = isFaceDown ? sleeve : card?.info.image_url;

  const boxShadow = isDefending
    ? `${isOpponentCard ? '-5px' : '5px'} -1px 10px -1px black`
    : `0px ${isOpponentCard ? '-5px' : '5px'} 5px -1px black`;

  return (
    <MotionBox
      bgImg={`url(${imageUrl})`}
      bgSize="100% 100%"
      bgRepeat="no-repeat"
      w="91px"
      h="133px"
      boxShadow={boxShadow}
      transform={`scaleY(${isOpponentCard ? '-' : ''}1) rotate(${
        isDefending ? '90' : '0'
      }deg)`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
};

export const EmptyCardSlot: React.FC = () => <Box w="91px" h="133px" />;
