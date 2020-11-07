import { useField } from './useField';
import { useUpdateField } from './useUpdateField';

export const usePlayerDeck = () => {
  const updateField = useUpdateField();
  const { player } = useField();

  const drawCard = () => {
    const shallowDeck = player.deck.slice();
    const card = shallowDeck.pop();

    updateField({
      player: {
        ...player,
        deck: shallowDeck,
        hand: [...player.hand, card],
      },
    });
  };

  return {
    deck: player.deck,
    drawCard,
  };
};
