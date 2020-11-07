import { useField } from './useField';

export const usePlayerExtraZone = () => {
  const field = useField();

  return field.player.extra;
};
