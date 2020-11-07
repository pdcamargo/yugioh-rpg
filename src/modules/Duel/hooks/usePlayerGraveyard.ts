import { useField } from './useField';

export const usePlayerGraveyard = () => {
  const field = useField();

  return field.player.graveyard;
};
