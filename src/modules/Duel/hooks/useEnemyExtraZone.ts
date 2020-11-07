import { useField } from './useField';

export const useEnemyExtraZone = () => {
  const field = useField();

  return field.enemy.extra;
};
