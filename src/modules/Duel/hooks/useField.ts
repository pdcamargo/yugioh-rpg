import { useDuel } from './useDuel';

export const useField = () => {
  const context = useDuel();

  return context.field;
};
