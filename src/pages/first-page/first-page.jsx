import React, { useEffect, useRef } from 'react';
import './first-page.css'; 
import { motion } from 'motion/react'; 
import { useNavigate } from 'react-router-dom'; 
import curtainSound from '../../assets/sounds/cinematic-piano-logo-144986.mp3';

import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons


export const HomePage = () => {
  const navigate = useNavigate(); 
  const curtainSoundRef = useRef(null); // Create a reference for the audio element

  // Handle navigating to another page
  const handleButtonClick = () => {
    navigate('/main'); 
  };

  // Play curtain sound
  const playCurtainSound = () => {
    if (curtainSoundRef.current) {
      curtainSoundRef.current.play(); // Play sound using the ref
    }
  };

  useEffect(() => {
    // Preload curtain sound on component mount
    if (curtainSoundRef.current) {
      curtainSoundRef.current.load(); // Ensure sound is preloaded before animation
    }
  }, []);

  
  return (
    <div className="page-container">
     
      {/* Curtain opening sound */}
      <audio ref={curtainSoundRef} preload="auto">
        <source src={curtainSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div className="curtain-wrapper">
        {/* Left Red Curtain opens from 0% to -100% */}
        <motion.div
          className="curtain left"
          initial={{ x: "0%", skewX: "0deg" }} 
          animate={{
            x: "-87%", skewX: "-8deg", 
          }}
          transition={{
            duration: 2.5, 
            ease: "easeOut",
            // Trigger curtain sound when animation starts
          }}
        />
        {/* Right Red Curtain opens from 0% to 100% */}
        <motion.div
          className="curtain right"
          initial={{ x: "0%", skewX: "0deg" }}
          animate={{
            x: "87%", skewX:"8deg" 
          }}
          transition={{
            duration: 2.5, 
            ease: "easeOut",
            // Trigger curtain sound when animation starts
          }}
        />
      </div>

      <i 
        className="bi bi-volume-up-fill" 
        onClick={playCurtainSound}  
        style={{ 
          fontSize: '2rem', 
          color: 'white', 
          cursor: 'pointer', 
          position: 'absolute', 
          top: '40px',   
          right: '150px'  
        }}
        aria-label="Play Sound"
      ></i>


      {/* Black Background and Text */}
      <motion.div
        className="text-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >

       {/* <i className="icon"></i>  */}
        
        <motion.h1
          className="welcome-text"
          initial={{ y: "-100px", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{
            duration: 2,
            delay: 2.5,
            ease: "easeOut" 
          }}
        >
          Welcome to 
          <br></br> 
          
          MovieMapper
        </motion.h1>

        {/* Button to navigate to another page */}
        <motion.button
          className="start-button"
          onClick={handleButtonClick}  
          whileHover={{ scale: 1.1 }}  
          transition={{ duration: 0.2 }}
        >
          Choose a Movie
        </motion.button>
      </motion.div>
    </div>
  );
};


