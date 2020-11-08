import { BaseCard, CardPosition } from '~/cards/base-card';

import { FieldCard, FieldCardInfo } from '../types';
import { useField } from './useField';
import { useUpdateField } from './useUpdateField';

export const usePlayerMonsterZone = () => {
  const updateField = useUpdateField();

  const { player } = useField();

  const getFreeSpot = () => {
    return Object.keys(player.monster).findIndex(
      (spot) => player.monster[spot] === null
    );
  };

  const placeMonster = (
    handCardIndex: number,
    card: BaseCard,
    isDefending = false,
    isFaceDown: boolean = null
  ) => {
    const spot = getFreeSpot();

    if (spot === -1) return;

    const newMonsterField: FieldCard = {
      ...player.monster,
    };

    const faceDown =
      isFaceDown === true || (isDefending && isFaceDown === null);

    const newMonsterInfo: FieldCardInfo = {
      card,
      isDefending,
      isFaceDown: faceDown,
    };

    newMonsterField[spot] = newMonsterInfo;

    const newPlayerHand = player.hand.slice();
    newPlayerHand.splice(handCardIndex, 1);

    updateField({
      player: {
        ...player,
        monster: newMonsterField,
        hand: newPlayerHand,
      },
    });

    card.onEnterOnBattlefield();
  };

  const changeToMode = (
    cardPosition: CardPosition,
    mode: 'defense' | 'attack',
    isFaceDown: boolean = false
  ) => {
    const isDefending = mode === 'defense';
    const card = player.monster[cardPosition];

    const newMonsterField: FieldCard = {
      ...player.monster,
    };

    const newMonsterInfo: FieldCardInfo = {
      ...card,
      isDefending,
      isFaceDown,
    };

    newMonsterField[cardPosition] = newMonsterInfo;

    if (card.isFaceDown && !isFaceDown) {
      card.card.onFlip();
    }

    updateField({
      player: {
        ...player,
        monster: newMonsterField,
      },
    });
  };

  return { monster: player.monster, placeMonster, changeToMode };
};
