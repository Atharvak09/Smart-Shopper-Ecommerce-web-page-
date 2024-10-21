import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Updated the import for BrowserRouter
import App from './App'; // Assuming App.js is in the same directory

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Using BrowserRouter here */}
    <App />
  </BrowserRouter>
);
