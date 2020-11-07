import { useField } from './useField';

export const usePlayerInfo = () => {
  const {
    player: { hp, cardSleeve, playmat },
  } = useField();

  return {
    vitals: {
      hp,
    },
    cardSleeve,
    playmat,
  };
};
