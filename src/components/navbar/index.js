import React from 'react';
import {Link } from 'react-router-dom';
import './style.css';
function navbar() {

  return (
    <div className="navbar">
    
    <div className="container">
        <ul className="ul-list">
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><Link to="/work">Work</Link></li>
            <li className="list-item"><Link to="/portofolio">Portfolio</Link></li>
            <li className="list-item"><Link to="/profile">Profile</Link></li>
            <li className="list-item"><Link to="/about">About</Link></li>
            <li className="list-item"><Link to="/contact">Contact</Link></li>
        </ul>
        
    </div>
    
</div>
  );
}

export default navbar;
