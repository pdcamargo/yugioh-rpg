import { useField } from './useField';

export const useEnemyHand = () => {
  const field = useField();

  return field.enemy.hand;
};
