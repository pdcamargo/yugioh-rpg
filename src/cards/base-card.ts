import { logger } from '~/services';
import { CardInfoType } from '~/types/card';

import cards from '../../database/card.json';

export interface ICard {
  info: CardInfoType;

  onEnterOnBattlefield: () => void;
}

export interface IFieldMethods {
  attack: (cardId: number | 'direct') => void;
}

export type CardPosition = 0 | 1 | 2 | 3 | 4;

export class BaseCard implements ICard {
  static ID = 0;

  /**
   * The card itself, holds information like name, description, attack, etc
   *
   * If it is a creature, it will have the ***monster_info*** property, and if it is a spell, it will have the ***spell_info*** property
   */
  info: CardInfoType;

  /**
   * What position this card ocupies on the field from left to right
   *
   * If the card is on field zone or any other zone that is not spell or monster zone
   * still counts from left to right, even if it is a single position available for that zone (as in field zone)
   */
  cardPosition: CardPosition;

  constructor(cardId: number, cardPosition: CardPosition) {
    this.cardPosition = cardPosition;
    this.info = cards.find((card: CardInfoType) => card.id === cardId);

    if (!this.info) {
      throw Error(`Card with id ${cardId} was not found`);
    }

    logger.info(`card ${this.info.name} has been loaded`, 'BaseCard');
  }

  onEnterOnBattlefield() {
    logger.info(`card ${this.info.name} entered on battlefield`);
  }
}
