import React, { Component } from 'react';
import './Header.css';
import Logo from './header/Logo';
import Nav from './header/Nav';

class Header extends Component {
   
    render() {
        return (
          <header>
            <Logo></Logo>
            <Nav></Nav>
          </header>
        )
      }
    }
    
export default Header
