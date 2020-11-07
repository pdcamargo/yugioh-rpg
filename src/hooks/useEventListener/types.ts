export type UseEventListener = {
  (
    eventName: string,
    handler: (event: Event) => void,
    element?: (Window & typeof globalThis) | Element
  ): void;
};
