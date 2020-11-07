import { BaseCard } from '~/cards/base-card';

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
  };

  return { monster: player.monster, placeMonster };
};
