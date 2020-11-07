import { CardCollection, composeCard } from '~/cards';

import { Field, Player } from './types';

const cards = [
  ...composeCard(CardCollection.MysticalElf, 0, 1),
  ...composeCard(CardCollection.FeralImp, 0, 1),
];
const extra = composeCard(CardCollection.MysticalElf, 0, 7);
const hand = [
  ...composeCard(CardCollection.MysticalElf, 0, 1),
  ...composeCard(CardCollection.FeralImp, 0, 1),
];
const graveyard = composeCard(CardCollection.MysticalElf, 0, 6);

const field: Player = {
  hp: 8000,
  deck: cards,
  banished: [],
  extra,
  graveyard,
  field: null,
  hand,
  monster: {
    0: {
      card: cards[0],
    },
    1: null,
    2: {
      card: cards[0],
      isDefending: true,
      isFaceDown: true,
    },
    3: null,
    4: null,
  },
  spell: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  },
  playmat: '',
  cardSleeve: undefined,
};

export const defaultField: Field = {
  enemy: {
    ...field,
    cardSleeve: '/sleeves/1.png',
    playmat: '/playmat/2.jpg',
  },
  player: {
    ...field,
    cardSleeve: '/sleeves/2.jpg',
    playmat: '/playmat/1.jpg',
  },
};
