import { BaseCard } from './base-card';
import { MysticalElf, FeralImp } from './collection';
import { CardCollection } from './types';

export const CardClasses: Record<CardCollection, typeof BaseCard> = {
  [CardCollection.MysticalElf]: MysticalElf,
  [CardCollection.FeralImp]: FeralImp,
};
