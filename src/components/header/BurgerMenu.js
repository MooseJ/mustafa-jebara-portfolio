import React, { Component } from 'react';
import './BurgerMenu.css';
import CollapsableNavLinks from './CollapsableNavLinks'
import { IoIosMenu } from 'react-icons/io'


class BurgerMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      isNavbarOpen: false
    }
  }

  handleBurgerMenuClick = () =>
    this.setState((state) =>  ({isNavbarOpen: !state.isNavbarOpen}))

  render() {
    return (
      <>
        <div className="burger-menu" onClick={this.handleBurgerMenuClick}>
          <IoIosMenu size="4em"/>
        </div>
        <div className={ this.state.isNavbarOpen ? "collapsible-menu" : "hidden collapsible-menu"  } > 
          { this.state.isNavbarOpen ?  <CollapsableNavLinks onNavClick={this.handleBurgerMenuClick}/>: null }
        </div>
      </>
    )
  }
}

export default BurgerMenu;
