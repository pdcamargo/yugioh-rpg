import { useEffect } from 'react';

export const useInterval = (fn: () => void, delay: number) => {
  useEffect(() => {
    const id = setInterval(fn, delay);
    return () => clearInterval(id);
  });
};
