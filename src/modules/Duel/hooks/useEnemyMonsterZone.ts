import { useField } from './useField';

export const useEnemyMonsterZone = () => {
  const field = useField();

  return field.enemy.monster;
};
