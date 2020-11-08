import { CardClasses } from './constants';
import { CardCollection } from './types';

export const composeCard = (card: CardCollection, quantity = 1) => {
  const CardClass = CardClasses[card];

  const cards = [];

  for (let i = 0; i < quantity; i++) {
    cards.push(new CardClass());
  }

  return cards;
};
