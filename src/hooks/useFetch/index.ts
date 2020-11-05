import axios from 'axios';
import useSwr from 'swr';

import { UseFetchType } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFetch: UseFetchType = <DT = any, ET = any>(url: string) => {
  const { isValidating, mutate, revalidate, data, error } = useSwr<DT, ET>(
    url,
    async (route: string) => {
      const { data: response } = await axios.get<DT>(route);

      return response;
    }
  );

  return {
    data,
    error,
    isValidating,
    mutate,
    revalidate,
  };
};
