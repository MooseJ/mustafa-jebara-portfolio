import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu';
import NavLinks from './NavLinks';
import CollapsableNavLinks from './CollapsableNavLinks'

class Nav extends Component {
  render() {
    return ( 
      <>
        <BurgerMenu collapsibleMenu={<CollapsableNavLinks/>} />
        <NavLinks/>
      </>
    )
  }
}

export default Nav;
