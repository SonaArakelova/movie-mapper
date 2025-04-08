import React from "react";
import { createContext, useState } from "react";

export const MoviesContext = createContext();

export const tab = {
  search: "search",
  movies: "movies",
};

export const MoviesProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("friends");
  const [activeTab, setActiveTab] = useState(tab.search);

  return (
    <MoviesContext.Provider
      value={{
        searchQuery,
        onSearch: setSearchQuery,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};














// import React, { createContext, useState, useEffect } from "react";
// import { useLocalStorageState} from "../hook/use-local-storage-state";

// // Create context
// export const MoviesContext = createContext();

// export const tab = {
//   search: "search",
//   movies: "movies",
// };

// // Context provider component
// export const MoviesProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null); // Stores user data
//   const [movieList, setMovieList] = useLocalStorageState([], "movies"); // Using your custom hook to persist movies

//   // Load user data from localStorage if available
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Handle login
//   const login = (username) => {
//     const newUser = { username };
//     setUser(newUser);
//     localStorage.setItem("user", JSON.stringify(newUser));
//     setIsLoggedIn(true);
//   };

//   // Handle sign-up (simple username only for demo)
//   const signUp = (username) => {
//     const newUser = { username };
//     setUser(newUser);
//     localStorage.setItem("user", JSON.stringify(newUser));
//     setIsLoggedIn(true);
//   };

//   // Log out the user and clear the data
//   const logOut = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//     localStorage.removeItem("user");
//     localStorage.removeItem("movies");
//   };

//   return (
//     <MoviesContext.Provider
//       value={{
//         isLoggedIn,
//         user,
//         movieList,
//         login,
//         signUp,
//         logOut,
//         setMovieList,
//       }}
//     >
//       {children}
//     </MoviesContext.Provider>
//   );
// };
