import { useField } from './useField';

export const useEnemyFieldZone = () => {
  const field = useField();

  return field.enemy.field;
};
