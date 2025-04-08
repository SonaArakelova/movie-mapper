// import { useState, useEffect } from "react";

// export const useLocalStorageState = (initialState, key) => {
//   const [value, setValue] = useState(() => {
//     const localStorageValue = localStorage.getItem(key);
//     return localStorageValue ? JSON.parse(localStorageValue) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value, key]);

//   return [value, setValue];
// };





import { useState, useEffect } from "react";

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    // Check if there's a value in localStorage, otherwise return the initialState
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    // Whenever the value changes, update localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
