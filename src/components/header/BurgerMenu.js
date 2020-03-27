import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BurgerMenu.css';

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
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={ this.state.isNavbarOpen ? "collapsible-menu" : "hidden collapsible-menu"  } > 
          { this.state.isNavbarOpen ? this.props.collapsibleMenu : null }
        </div>
      </>
    )
  }
}

BurgerMenu.propTypes = {
  collapsibleMenu: PropTypes.element
}

export default BurgerMenu;
