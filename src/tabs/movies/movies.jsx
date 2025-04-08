// import { useLocalStorageState } from "../../hook/use-local-storage-state.js";
// import { Table } from "../../components/table/table";
// import React from 'react';
// import './movies.css';

// export const Movies = () => {
//   const [moviesState] = useLocalStorageState([], "movies");

//   return (
//     <div className="favorite container mt-4 " style={{ height: "600px" }}>
//       <h1>My Movie List</h1>
//       <Table data={moviesState} onRowClick={() => {}} />
//     </div>
//   );
// };




// //2
// import React, { useState, useEffect } from "react";
// import { useLocalStorageState } from "../../hook/use-local-storage-state.js";
// import { Table } from "../../components/table/table";
// import './movies.css';

// export const Movies = () => {
//   const [moviesState, setMoviesState] = useLocalStorageState([], "movies");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check if the user is logged in by reading localStorage
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (storedUser) {
//       setIsLoggedIn(true); // User is logged in
//     } else {
//       setIsLoggedIn(false); // User is not logged in
//     }
//   }, []); 

//   return (
//     <div className="favorite container mt-4">
//       <h1>My Movie List</h1>
//       {isLoggedIn && moviesState.length > 0 ? (
//         <Table data={moviesState} onRowClick={() => {}} />
//       ) : (
//         <p style={{ textAlign: 'center', color: 'rgb(89, 40, 40)', height: '600px', fontSize: '2rem', marginTop: '5rem' }}>
//           😬 Oops, You need to Log in!
//         </p>
//       )}
//     </div>
//   );
// };





import React, { useState, useEffect } from "react";
import { useLocalStorageState } from "../../hook/use-local-storage-state.js";
import { Table } from "../../components/table/table";
import './movies.css';

export const Movies = () => {
  const [moviesState, setMoviesState] = useLocalStorageState([], "movies");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in by reading localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []);

  return (
    <div className="favorite container mt-4" style={{height: '600px'}}>
      <h1>My Movie List</h1>
      {isLoggedIn ? (
        <div>
          {moviesState.length > 0 ? (
            <>
              <Table data={moviesState} onRowClick={() => {}} />
            </>
          ) : (
            <p style={{ textAlign: 'center', color: 'rgb(89, 40, 40)',  fontSize: '2rem', marginTop: '5rem' }}>
             🫣  No movies added yet.
            </p>
          )}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: 'rgb(89, 40, 40)',  fontSize: '2rem', marginTop: '5rem' }}>
          😬 Oops, You need to Log in to add movies!
        </p>
      )}
    </div>
  );
};
