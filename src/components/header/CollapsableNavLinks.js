import React, { Component } from 'react';
import './CollapsableNavLinks.css';

class CollapsableNavLinks extends Component {
  render() {
    return (
      <ul className="collapsible-links">
        <li>
          <a href="#about-me-section" onClick={this.props.onNavClick}>ABOUT ME</a>
        </li>
        <li>
          <a href="#about-me-section" onClick={this.props.onNavClick}>PROJECTS</a>
        </li>
        <li>
          <a href="#about-me-section" onClick={this.props.onNavClick}>EXPERIENCE</a>
        </li>
        <li>
          <a href="#about-me-section" onClick={this.props.onNavClick}>CONTACT ME</a>
        </li>
      </ul>
    )
  }
}

export default CollapsableNavLinks;