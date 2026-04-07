/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react';

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const throttleRef = useRef(false);
  return useCallback(
    (...args: unknown[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
};
