import React from 'react';

import { Box } from '@chakra-ui/core';

type BattlefieldCardProps = {
  isDefending?: boolean;
  isFaceDown?: boolean;
  isOpponentCard?: boolean;
  sleeveUrl?: string;
};

export const BattlefieldCard: React.FC<BattlefieldCardProps> = ({
  isOpponentCard,
  isDefending,
  isFaceDown,
  sleeveUrl,
}) => {
  const sleeve =
    sleeveUrl ||
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e4175c3f-297e-48be-8d30-8480016829c7/d6dlsyg-52f89407-773a-464f-93d3-4648cc91f3fb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTQxNzVjM2YtMjk3ZS00OGJlLThkMzAtODQ4MDAxNjgyOWM3XC9kNmRsc3lnLTUyZjg5NDA3LTc3M2EtNDY0Zi05M2QzLTQ2NDhjYzkxZjNmYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DbrXxjuDy1GCL4bWW-REB40nCLH2ZBz39FsChuxb_nE';
  const imageUrl = isFaceDown
    ? sleeve
    : 'https://storage.googleapis.com/ygoprodeck.com/pics/21844576.jpg';

  const boxShadow = isDefending
    ? `${isOpponentCard ? '-5px' : '5px'} -1px 10px -1px black`
    : `0px ${isOpponentCard ? '-5px' : '5px'} 5px -1px black`;

  return (
    <Box
      bgImg={`url(${imageUrl})`}
      bgSize="100% 100%"
      bgRepeat="no-repeat"
      w="91px"
      h="133px"
      boxShadow={boxShadow}
      transform={`scaleY(${isOpponentCard ? '-' : ''}1) rotate(${
        isDefending ? '90' : '0'
      }deg)`}
    />
  );
};

export const EmptyCardSlot: React.FC = () => <Box w="91px" h="133px" />;
