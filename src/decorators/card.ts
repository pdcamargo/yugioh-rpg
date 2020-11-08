import { CardInfoType } from '~/types/card';

import cards from '../../database/card.json';

interface Type<T> {
  new (...args: any[]): T;
}

export function CardEntity<T extends Type<any>>(cardId: number) {
  const cardInfo = cards.find(
    (card: CardInfoType) => card.id === cardId
  ) as CardInfoType;

  // eslint-disable-next-line func-names
  return function (target: T) {
    return class extends target {
      info = cardInfo;
    };
  };
}
