import { BaseCard } from '~/cards/base-card';

export enum DeckType {
  Deck,
  Extra,
  Graveyard,
}

export type DeckProps = {
  isOpponentDeck?: boolean;
  sleeveUrl?: string;
  cards: BaseCard[];
  deckType: DeckType;
  onClick?: () => void;
};
