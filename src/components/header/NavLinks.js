import React, { Component } from 'react';
import './NavLinks.css';

class NavLinks extends Component {
  render() {
    return ( 
      <ul className="nav-links">
        <li>
          ABOUT ME
        </li>
        <li>
          PROJECTS
        </li>
        <li>
          EXPERIENCE
        </li>
        <li>
          CONTACT ME
        </li>
      </ul>
    )
  }
}

export default NavLinks;