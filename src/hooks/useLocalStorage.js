import { useRef, useState, useEffect } from "react";

const useLocalStorage = (storageKey, initialValue = null) => {
  if (typeof window === "undefined") {
    return [null, null, null];
  }

  const key = useRef(storageKey);
  const initial = useRef(initialValue);
  let storageValue = localStorage.getItem(key.current)
    ? JSON.parse(localStorage.getItem(key.current))
    : initialValue && initialValue.current
    ? initialValue.current
    : initialValue;
  const [value, setValue] = useState(storageValue);

  useEffect(() => {
    if (initial.current && localStorage.getItem(key.current) === null)
      setItem(initial.current);
  }, []);

  const setItem = (newValue) => {
    localStorage.setItem(key.current, JSON.stringify(newValue));
    setValue(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key.current);
  };

  return [value, setItem, removeItem];
};

export default useLocalStorage;
