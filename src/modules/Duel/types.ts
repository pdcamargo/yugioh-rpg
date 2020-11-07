import { BaseCard } from '~/cards/base-card';

export type FieldCardInfo = {
  card: BaseCard;
  isFaceDown?: boolean;
  isDefending?: boolean;
};

export type FieldCard = {
  0: FieldCardInfo | null;
  1: FieldCardInfo | null;
  2: FieldCardInfo | null;
  3: FieldCardInfo | null;
  4: FieldCardInfo | null;
};

export type Player = {
  hp: number;
  cardSleeve?: string;
  playmat: string;
  monster: FieldCard;
  spell: FieldCard;
  hand: BaseCard[];
  field: BaseCard | null;
  deck: BaseCard[];
  graveyard: BaseCard[];
  extra: BaseCard[];
  banished: BaseCard[];
};

export type Field = {
  player: Player;
  enemy: Player;
};

export type DuelContext = {
  field: Field;
  updateField: (newValues: Partial<Field>) => void;
};
