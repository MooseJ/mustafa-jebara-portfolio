import React, { Component } from 'react';
import './header.css';

class Header extends Component {
   
    render() {
        return (
          <header>
            <div id="logo">
              <h2>MJ</h2>
            </div>
            <nav>
              <ul>
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
            </nav>
          </header>
        )
      }
    }
    
export default Header