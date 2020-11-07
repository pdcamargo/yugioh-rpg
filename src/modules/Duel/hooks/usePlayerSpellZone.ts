import { useField } from './useField';

export const usePlayerSpellZone = () => {
  const field = useField();

  return field.player.spell;
};
