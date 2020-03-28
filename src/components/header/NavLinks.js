import React, { Component } from 'react';
import './NavLinks.css';

class NavLinks extends Component {
  render() {
    return ( 
      <ul className="nav-links">
        <li>
          <a href="#about-me-section">ABOUT ME</a>
        </li>
        <li>
          <a href="#about-me-section">PROJECTS</a>
        </li>
        <li>
          <a href="#about-me-section">EXPERIENCE</a>
        </li>
        <li>
          <a href="#about-me-section">CONTACT ME</a>
        </li>
      </ul>
    )
  }
}

export default NavLinks;