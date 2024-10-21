import React, { useState } from 'react';
import axios from 'axios';
import './CSS/login.css';

const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setErrorMessage(''); // Clear previous error message

    try {
      const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/signup';
      const response = await axios.post(url, {
        username,
        password,
      }); 

      console.log('Response from server:', response.data); // Log the server response

      if (isLogin) {
        // Store the token in localStorage or sessionStorage if needed
        localStorage.setItem('token', response.data.token);
        // Close the login popup on successful login
        onClose(); // Call the onClose function to close the popup
      } else {
        // Handle what happens after a successful signup (e.g., auto-login or redirect)
        setIsLogin(true); // Automatically switch to login mode after successful signup
      }
    } catch (error) {
      console.error('Error during request:', error.response ? error.response.data : error.message);
      setErrorMessage(error.response?.data.message || 'Please try again.'); // Update to handle cases where error.response is undefined
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <div className="toggle-form">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span className="toggle-link" onClick={() => setIsLogin(false)}>
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span className="toggle-link" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
