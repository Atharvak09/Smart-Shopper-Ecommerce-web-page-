import React from 'react';
import './CSS/smbanner.css';

const SmBanner = () => {
  return (
    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <h2>Trending Gadgets</h2>
        <span>Best products just for you !!</span>
        <button className="white">Click</button>
      </div>
      <div className="banner-box banner-box2">
        <h2>Help & Support</h2>
        <span>We're Here to Help You Shop Smart!</span>
        <button className="white">Click</button>
      </div>
    </section>
  );
};

export default SmBanner;