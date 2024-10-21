import React from 'react';
import './CSS/newsletter.css';

const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>Join Our Community for Smart Shopping Tips! </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your E-mail adderss" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
}; 

export default Newsletter;