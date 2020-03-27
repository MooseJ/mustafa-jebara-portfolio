import React, { Component } from 'react';
import './CollapsableNavLinks.css';

class CollapsableNavLinks extends Component {
  render() {
    return (
      <ul className="collapsible-links">
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

export default CollapsableNavLinks;