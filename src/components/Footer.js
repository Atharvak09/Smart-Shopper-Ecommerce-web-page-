import React from 'react';
import './CSS/footer.css';

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <h4>Contact</h4>
        <p><strong>Adderss:</strong> MIT World Peace University, Kothrud</p>
        <p><strong>Phone:</strong> +91-7823182367</p>
        <p><strong>Hours:</strong> Sun - Thu</p>
        <div className="follow">
          <h4>follow us</h4>
          <div className="icon">
            <i className="fa fa-facebook-f"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Privacy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="col">
        <h4> My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">My Wishlist</a>
      </div>
    </footer>
  );
};

export default Footer;