import { useField } from './useField';

export const useEnemyInfo = () => {
  const {
    enemy: { hp, cardSleeve, playmat },
  } = useField();

  return {
    vitals: {
      hp,
    },
    cardSleeve,
    playmat,
  };
};
