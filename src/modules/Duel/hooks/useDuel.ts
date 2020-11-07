import { useContext } from 'react';

import DuelContext from '../context';

export const useDuel = () => {
  const context = useContext(DuelContext);

  if (!context) {
    throw Error('The hook must be used inside of DuelContext Provider');
  }

  return context;
};
