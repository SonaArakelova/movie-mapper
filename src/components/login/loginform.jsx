import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import "./loginform.css"

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); //  SignUp
  const [isSignUp, setIsSignUp] = useState(false); //  toggle between Login and SignUp 
  const [message, setMessage] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setMessage("Login successful!");
      onLoginSuccess(user); // Call the callback to inform the parent of a successful login
    } else {
      setMessage("Invalid credentials! Please try again.");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (storedUsers.find((user) => user.email === email)) {
      setMessage("Email already exists! Please login or use another email.");
      return;
    }

    //  new user
    const newUser = { name, email, password };
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setMessage("Sign-up successful! You can now log in.");
    setIsSignUp(false); // Switch back to the login form 
  };

  return (
    <form onSubmit={isSignUp ? handleSignUpSubmit : handleLoginSubmit}>
      <div className="form-group">
        {isSignUp && (
          <>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit" style={{backgroundColor: "rgb(193, 64, 64)"}}>{isSignUp ? "Sign Up" : "Login"}</Button>

      {message && <p>{message}</p>}

      {/* Toggle between Login and SignUp */}
      <div style={{ marginTop: "10px" }}>
        {isSignUp ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setIsSignUp(false)}
              style={{ cursor: "pointer", color: "#ff6600" }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setIsSignUp(true)}
              style={{ cursor: "pointer", color: "rgb(193, 64, 64)" }}
            >
              Sign Up here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginForm;

