import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {  
  render() {
    const path = this.props.location.pathname;
    return (
        <header className="header-container">
          <div className="logo">
            <h1 className="nav-title">
              MUSTAFA JEBARA
            </h1>
          </div>
          <nav>
            <ul>
              <li className="item">
                <Link 
                  to="/" 
                  className={`item-link ${path === '/' ? "item-link-active" : ""}`}>
                  WORK EXPERIENCE
                </Link>
              </li >
              <li className="item">
                <Link 
                  to="/projects" 
                  className={`item-link ${path === '/projects' ? "item-link-active" : ""}`}>
                  PROJECTS
                </Link>
              </li >
              <li className="item">
                <Link 
                  to="/about" 
                  className={`item-link ${path === '/about'  ? "item-link-active" : ""}`}>
                  ABOUT 
                </Link>
              </li>
            </ul>
          </nav>
        </header>
    )
  }
}