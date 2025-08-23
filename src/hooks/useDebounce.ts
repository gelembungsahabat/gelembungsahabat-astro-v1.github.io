import { useRef } from "react";

export function useDebounce<T extends (...args: any[]) => void>(
  cb: T,
  delay: number
): () => void {
  const timeoutId = useRef<NodeJS.Timeout>(null);
  return function (...args) {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => cb(...args), delay);
  };
}
