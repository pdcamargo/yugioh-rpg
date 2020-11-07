import { useField } from './useField';

export const useEnemyGraveyard = () => {
  const field = useField();

  return field.enemy.graveyard;
};
