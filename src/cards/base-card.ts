import { logger } from '~/services';
import { CardInfoType } from '~/types/card';

export interface ICard {
  info: CardInfoType;

  onEnterOnBattlefield: () => void;
  onBeingDrawn: () => void;
  onFlip: () => void;
}

export interface IFieldMethods {
  attack: (cardId: number | 'direct') => void;
}

export type CardPosition = 0 | 1 | 2 | 3 | 4;

export class BaseCard implements ICard {
  info: CardInfoType;

  onEnterOnBattlefield() {
    logger.info(`${this.info.name} entered on battlefield`, 'BaseCard');
  }

  onBeingDrawn() {
    logger.info(`${this.info.name} was drawn`, 'BaseCard');
  }

  onFlip() {
    logger.info(`${this.info.name} was flipped`, 'BaseCard');
  }
}
