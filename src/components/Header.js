import React from 'react';
import './CSS/header.css';

const Header = ({ onLoginClick }) => {
  return (
    <section id="header">
      <p style={{ color: 'black' }}><b>Smart Shopper</b></p>
      <div>
        <ul id="navbar">
          <li><a className="active" href="index.html">Home</a></li>
          <li><a href="Wishlist/first.html">Wishlist</a></li>
          <li><a href="#" onClick={onLoginClick}>login</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li id="bag"><a href="cart.html"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a></li>
          <a href="#" id="close"><i className="fa fa-times"></i></a>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart.html"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
        <i id="bar" className="fa fa-outdent"></i>
      </div>
    </section>
  );
};

export default Header;