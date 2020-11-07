import { useField } from './useField';

export const usePlayerFieldZone = () => {
  const field = useField();

  return field.player.field;
};
