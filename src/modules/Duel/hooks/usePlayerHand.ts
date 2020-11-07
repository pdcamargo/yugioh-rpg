import { useField } from './useField';

export const usePlayerHand = () => {
  const field = useField();

  return field.player.hand;
};
