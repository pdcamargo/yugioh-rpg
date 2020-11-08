import { BoxProps } from '@chakra-ui/core';

export const getBoxProps = (
  isFaceDown: boolean,
  isOpponentCard: boolean,
  isDefending: boolean,
  sleeveUrl: string,
  cardImageUrl: string
): BoxProps => {
  const sleeve = sleeveUrl || '/sleeves/default-sleeve.jpg';
  const imageUrl = isFaceDown ? sleeve : cardImageUrl;

  const boxShadow = isDefending
    ? `${isOpponentCard ? '-5px' : '5px'} -1px 10px -1px black`
    : `0px ${isOpponentCard ? '-5px' : '5px'} 5px -1px black`;
  return {
    bgImg: `url(${imageUrl})`,
    bgSize: '100% 100%',
    bgRepeat: 'no-repeat',
    w: '91px',
    h: '133px',
    boxShadow,
    transform: `scaleY(${isOpponentCard ? '-' : ''}1) rotate(${
      isDefending ? '90' : '0'
    }deg)`,
  };
};
