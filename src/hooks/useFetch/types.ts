import { mutateCallback } from 'swr/dist/types';

export type UseFetchType = <DT = unknown, ET = unknown>(
  url: string | null
) => {
  data: DT;
  error: ET;
  revalidate: () => Promise<boolean>;
  mutate: (
    data?: DT | Promise<DT> | mutateCallback<DT>,
    shouldRevalidate?: boolean
  ) => Promise<DT>;
  isValidating: boolean;
};
