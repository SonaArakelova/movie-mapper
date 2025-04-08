import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import LoginForm from "../../components/login/loginform"; 
import { Footer } from "../../components/footer/footer";

import "./login-page.css";


export  const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  const handleLoginSuccess = (user) => {

    // Store user in localStorage and set login state
    localStorage.setItem("currentUser", JSON.stringify(user));
    setIsLoggedIn(true);
   navigate("/main"); 
  };

  return (
    <div>
      <header className="bg text-white p-3 d-flex justify-content-between">
      <div className="logo" >
        <div className="backofh1">
          <h1>
            <span>M</span> MovieMapper
          </h1>
        </div>
      </div>
        <button
          onClick={() => navigate("/main")}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </header>

      <div className="login-page ">
        <div className="login-form-container" >
          <h2 style={{color: "rgb(193, 64, 64)"}}>Login</h2>

          {!isLoggedIn ? (
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          ) : (
            <p>You are already logged in!</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

