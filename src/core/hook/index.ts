import { useEffect, useRef } from "react";

export function useValueRef<T>(v: T) {
  const valueRef = useRef(v);

  useEffect(() => {
    valueRef.current = v;
  });

  return valueRef;
}
