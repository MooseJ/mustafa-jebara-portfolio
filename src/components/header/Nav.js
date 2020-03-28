import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';
import NavLinks from './NavLinks';

class Nav extends Component {
  render() {
    return ( 
      <>
        <BurgerMenu/>
        <NavLinks/>
      </>
    )
  }
}

export default Nav;
