// // import React, { useRef, useEffect, useContext, useState} from "react";
// // import { MoviesContext, tab } from "../../contexts/moviecontext"
// // import movieSound from '../../assets/sounds/twinkle-63280.mp3'
// // import LoginForm from "../../tabs/login/login-form";

// // import "./header.css";
// // import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// // import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons


// // export const Header = ({setShowLogin}) => {
// //   const { searchQuery, onSearch, activeTab } = useContext(MoviesContext);
// //   const inputRef = useRef(null);
// //   const movieSoundRef = useRef(null); // Create a reference for the audio element
  
// //   // const { isLoggedIn, user, login, signUp, logOut } = useContext(MoviesContext);
// //   // const [isSigningUp, setIsSigningUp] = useState(false); // State to toggle between login/signup view

// //   const [isPlaying, setIsPlaying] = useState(false);


// //   const toggleMovieSound = () => {
// //     if (movieSoundRef.current) {
// //       if (isPlaying) {
// //         movieSoundRef.current.pause(); // Pause the sound if it's currently playing
// //         setIsPlaying(false);
// //       } else {
// //         movieSoundRef.current.play(); // Play the sound if it's currently paused
// //         setIsPlaying(true);
// //       }
// //     }
// //   };



// //   useEffect(() => {
// //     inputRef.current.focus();
// //   }, []);

  
// //     useEffect(() => {
// //       // Preload curtain sound on component mount
// //       if (movieSoundRef.current) {
// //         movieSoundRef.current.load(); // Ensure sound is preloaded before animation
// //       }
// //     }, []);



  
// //   return (
// //     <header className="bg text-white p-3 d-flex justify-content-between">

// //       {/* movie sound */}
// //       <audio ref={movieSoundRef} preload="auto">
// //               <source src={movieSound} type="audio/mp3" />
// //             </audio>



// //       <div className="logo">
// //       <div className="backofh1">
// //         <h1><span>M</span> MovieMapper</h1>
// //         </div>
// //         {/* <i class="bi bi-film"></i>         */}
// //       </div>
// //       {activeTab === tab.search && (
// //       <input
// //         ref={inputRef}
// //         value={searchQuery}
// //         type="text"
// //         className=" input"
// //         placeholder="Search..."
// //         onChange={(e) => onSearch(e.target.value)}
// //       />
// //       )}

// //        <div className="buttons">

// //         <button>Ai helper</button>
// //         <button  onClick={() => setShowLogin(true)}>Sign in</button>




      
// //        <button>
// //         <i 
// //         className="bi bi-volume-up-fill" 
// //         onClick={toggleMovieSound}  
// //         style={{ 
// //           fontSize: '2rem', 
// //           color: 'white', 
// //           cursor: 'pointer', 
// //           padding:' 0px 20px',
          
// //         }}
// //         aria-label="Play Sound"
// //       ></i>
// // </button>
  
// //       </div>

// //     </header>
// //   );
// // };








// // import React, { useRef, useEffect, useContext, useState } from "react";
// // import { MoviesContext, tab } from "../../contexts/moviecontext";
// // import movieSound from '../../assets/sounds/twinkle-63280.mp3';
// // import LoginForm from "../../tabs/login/login-form";
// // import "./header.css";
// // import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// // import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons

// // export const Header = ({ setShowLogin, showLogin }) => {  // Accept showLogin prop
// //   const { searchQuery, onSearch, activeTab } = useContext(MoviesContext);
// //   const inputRef = useRef(null);
// //   const movieSoundRef = useRef(null); // Create a reference for the audio element
// //   const [isPlaying, setIsPlaying] = useState(false);

// //   const toggleMovieSound = () => {
// //     if (movieSoundRef.current) {
// //       if (isPlaying) {
// //         movieSoundRef.current.pause(); // Pause the sound if it's currently playing
// //         setIsPlaying(false);
// //       } else {
// //         movieSoundRef.current.play(); // Play the sound if it's currently paused
// //         setIsPlaying(true);
// //       }
// //     }
// //   };

// //   // useEffect(() => {
// //   //   inputRef.current.focus();
// //   // }, []);

// //   useEffect(() => {
// //     // Preload curtain sound on component mount
// //     if (movieSoundRef.current) {
// //       movieSoundRef.current.load(); // Ensure sound is preloaded before animation
// //     }
// //   }, []);

// //   return (
// //     <header className="bg text-white p-3 d-flex justify-content-between">
// //       {/* movie sound */}
// //       <audio ref={movieSoundRef} preload="auto">
// //         <source src={movieSound} type="audio/mp3" />
// //       </audio>

// //       <div className="logo">
// //         <div className="backofh1">
// //           <h1><span>M</span> MovieMapper</h1>
// //         </div>
// //       </div>

// //       {activeTab === tab.search && (
// //         <input
// //           ref={inputRef}
// //           value={searchQuery}
// //           type="text"
// //           className=" input"
// //           placeholder="Search..."
// //           onChange={(e) => onSearch(e.target.value)}
// //         />
// //       )}

// //       <div className="buttons">
// //         <button>Ai helper</button>
// //         <button onClick={() => setShowLogin(true)}>Sign in</button>
        
// //         <button>
// //           <i
// //             className="bi bi-volume-up-fill"
// //             onClick={toggleMovieSound}
// //             style={{
// //               fontSize: '2rem',
// //               color: 'white',
// //               cursor: 'pointer',
// //               padding: '0px 20px',
// //             }}
// //             aria-label="Play Sound"
// //           ></i>
// //         </button>
// //       </div>

// //       {/* Conditionally render LoginForm when showLogin is true */}
// //       {showLogin && <LoginForm setShowLogin={setShowLogin} />}
// //     </header>
// //   );
// // };

















// import React, { useRef, useEffect, useState,useContext } from "react";
// import { MoviesContext, tab } from "../../contexts/moviecontext";
// import movieSound from '../../assets/sounds/twinkle-63280.mp3';
// import LoginForm from "../../tabs/login/login-form";
// import "./header.css";
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons

// export const Header = ({ setShowLogin, showLogin }) => {
//   const { searchQuery, onSearch, activeTab } = useContext(MoviesContext);
//   const inputRef = useRef(null);
//   const movieSoundRef = useRef(null); // Create a reference for the audio element
//   const [isPlaying, setIsPlaying] = useState(false);

//   // State to manage login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   // Check localStorage for logged-in user status on mount
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (storedUser) {
//       setIsLoggedIn(true);
//       setUser(storedUser);
//     }
//   }, []);

//   const toggleMovieSound = () => {
//     if (movieSoundRef.current) {
//       if (isPlaying) {
//         movieSoundRef.current.pause(); // Pause the sound if it's currently playing
//         setIsPlaying(false);
//       } else {
//         movieSoundRef.current.play(); // Play the sound if it's currently paused
//         setIsPlaying(true);
//       }
//     }
//   };

//   const handleLogout = () => {
//     // Clear user session data
//     localStorage.removeItem('currentUser');
//     setIsLoggedIn(false);
//     setUser(null);
//   };

//   return (
//     <header className="bg text-white p-3 d-flex justify-content-between">
//       {/* movie sound */}
//       <audio ref={movieSoundRef} preload="auto">
//         <source src={movieSound} type="audio/mp3" />
//       </audio>

//       <div className="logo">
//         <div className="backofh1">
//           <h1><span>M</span> MovieMapper</h1>
//         </div>
//       </div>

//       {activeTab === tab.search && (
//         <input
//           ref={inputRef}
//           value={searchQuery}
//           type="text"
//           className="input"
//           placeholder="Search..."
//           onChange={(e) => onSearch(e.target.value)}
//         />
//       )}

//       <div className="buttons">
//         <button>Ai helper</button>
//         {isLoggedIn ? (
//           <>
//             <span style={{color:'rgb(117, 61, 55)', fontSize:'1.5rem'}}>Welcome   {user?.name}</span>
//             <button onClick={handleLogout}>Log Out</button>
//           </>
//         ) : (
//           <button onClick={() => setShowLogin(true)}>Sign In</button>
//         )}
        
//         <button>
//           <i
//             className="bi bi-volume-up-fill"
//             onClick={toggleMovieSound}
//             style={{
//               fontSize: '2rem',
//               color: 'white',
//               cursor: 'pointer',
//               padding: '0px 20px',
//             }}
//             aria-label="Play Sound"
//           ></i>
//         </button>
//       </div>

//       {/* Conditionally render LoginForm when showLogin is true */}
//       {showLogin && <LoginForm setShowLogin={setShowLogin} />}
//     </header>
//   );
// };






// import React, { useRef, useEffect, useState, useContext } from "react";
// import { MoviesContext, tab } from "../../contexts/moviecontext";
// import movieSound from '../../assets/sounds/twinkle-63280.mp3';
// import LoginForm from "../../tabs/login/login-form";
// import "./header.css";
// import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
// import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons

// export const Header = ({ setShowLogin, showLogin }) => {
//   const { searchQuery, onSearch, activeTab } = useContext(MoviesContext);
//   const inputRef = useRef(null);
//   const movieSoundRef = useRef(null); // Create a reference for the audio element
//   const [isPlaying, setIsPlaying] = useState(false);

//   // State to manage login status
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   // Check localStorage for logged-in user status on mount
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (storedUser) {
//       setIsLoggedIn(true);
//       setUser(storedUser);
//     }
//   }, []);

//   // Listen to changes in `localStorage` for login/logout across tabs
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const storedUser = JSON.parse(localStorage.getItem('currentUser'));
//       if (storedUser) {
//         setIsLoggedIn(true);
//         setUser(storedUser);
//       } else {
//         setIsLoggedIn(false);
//         setUser(null);
//       }
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const toggleMovieSound = () => {
//     if (movieSoundRef.current) {
//       if (isPlaying) {
//         movieSoundRef.current.pause(); // Pause the sound if it's currently playing
//         setIsPlaying(false);
//       } else {
//         movieSoundRef.current.play(); // Play the sound if it's currently paused
//         setIsPlaying(true);
//       }
//     }
//   };

//   const handleLogout = () => {
//     // Clear user session data
//     localStorage.removeItem('currentUser');
//     setIsLoggedIn(false);
//     setUser(null);
//   };

//   return (
//     <header className="bg text-white p-3 d-flex justify-content-between">
//       {/* movie sound */}
//       <audio ref={movieSoundRef} preload="auto">
//         <source src={movieSound} type="audio/mp3" />
//       </audio>

//       <div className="logo">
//         <div className="backofh1">
//           <h1><span>M</span> MovieMapper</h1>
//         </div>
//       </div>

//       {activeTab === tab.search && (
//         <input
//           ref={inputRef}
//           value={searchQuery}
//           type="text"
//           className="input"
//           placeholder="Search..."
//           onChange={(e) => onSearch(e.target.value)}
//         />
//       )}

//       <div className="buttons">
//         <button>Ai helper</button>

//         {isLoggedIn ? (
//           <>
//             <span style={{ color: 'rgb(117, 61, 55)', fontSize: '1.5rem' }}>
//               Welcome {user?.name}
//             </span>
//             <button onClick={handleLogout}>Log Out</button>
//           </>
//         ) : (
//           <button onClick={() => setShowLogin(true)}>Sign In</button>
//         )}

//         <button>
//           <i
//             className="bi bi-volume-up-fill"
//             onClick={toggleMovieSound}
//             style={{
//               fontSize: '2rem',
//               color: 'white',
//               cursor: 'pointer',
//               padding: '0px 20px',
//             }}
//             aria-label="Play Sound"
//           ></i>
//         </button>
//       </div>

//       {/* Conditionally render LoginForm when showLogin is true */}
//       {showLogin && <LoginForm setShowLogin={setShowLogin} />}
//     </header>
//   );
// };





import React, { useRef, useState, useEffect } from "react";
import { MoviesContext, tab } from "../../contexts/moviecontext";
import { useNavigate } from 'react-router-dom'; 

import movieSound from "../../assets/sounds/twinkle-63280.mp3";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons



export const Header = () => {
  const { searchQuery, onSearch, activeTab } = React.useContext(MoviesContext);
  const navigate = useNavigate(); 
  const movieSoundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check localStorage for logged-in user status on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  // Handle movie sound toggle
  const toggleMovieSound = () => {
    if (movieSoundRef.current) {
      if (isPlaying) {
        movieSoundRef.current.pause();
        setIsPlaying(false);
      } else {
        movieSoundRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setUser(null);
  };

  // Navigate to the login page
  const goToLoginPage = () => {
    navigate("/login");
  };

  const goToAIPage=()=>{
    navigate("/AI-helper")
  }


  return (
    <header className="bg text-white p-3 d-flex justify-content-between">
      {/* Movie sound */}
      <audio ref={movieSoundRef} preload="auto">
        <source src={movieSound} type="audio/mp3" />
      </audio>

      <div className="logo">
        <div className="backofh1">
          <h1>
            <span>M</span> MovieMapper
          </h1>
        </div>
      </div>

      {activeTab === tab.search && (
        <input
          type="text"
          className="input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
      )}

      <div className="buttons">
        <button onClick={goToAIPage}>Ai helper</button>

        {isLoggedIn ? (
          <>
            <span style={{ color: "rgb(193, 64, 64)", fontSize: "1.5rem" }}>
              Welcome {user?.name}
            </span>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <button onClick={goToLoginPage}>Sign In</button>
        )}

        <button>
          <i
            className="bi bi-volume-up-fill"
            onClick={toggleMovieSound}
            style={{
              fontSize: "2rem",
              color: "white",
              cursor: "pointer",
              padding: "0px 20px",
            }}
            aria-label="Play Sound"
          ></i>
        </button>
      </div>
    </header>
  );
};
