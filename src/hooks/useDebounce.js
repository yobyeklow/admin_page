import { useEffect, useState } from "react";

export default function useDebounce(initialValue = "", delay = 1000) {
  const [debounce, setDebounce] = useState(initialValue);
  useEffect(() => {
    const Timer = setTimeout(() => {
      setDebounce(initialValue);
    }, delay);
    return () => {
      clearTimeout(Timer);
    };
  }, [delay, initialValue]);
  return debounce;
}
