import { useLayoutEffect, useState } from 'react';

import { useEventListener } from '../useEventListener';

const isClient = typeof window !== 'undefined';

export function useWindowSize(initialWidth?: number, initialHeight?: number) {
  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  });

  useLayoutEffect(() => {
    if (isClient) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  useEventListener('resize', () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowSize;
}
