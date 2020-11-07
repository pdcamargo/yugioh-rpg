import { useRef, useEffect } from 'react';

import { UseEventListener } from './types';

const isClient = typeof window !== 'undefined';

export const useEventListener: UseEventListener = (
  eventName,
  handler,
  element = isClient ? window : undefined
) => {
  const savedHandler = useRef<(event: Event) => void>(null);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
