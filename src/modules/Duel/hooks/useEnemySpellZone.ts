import { useField } from './useField';

export const useEnemySpellZone = () => {
  const field = useField();

  return field.enemy.spell;
};
