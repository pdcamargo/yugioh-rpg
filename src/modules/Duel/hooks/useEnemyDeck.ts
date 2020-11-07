import { useField } from './useField';

export const useEnemyDeck = () => {
  const field = useField();

  return field.enemy.deck;
};
