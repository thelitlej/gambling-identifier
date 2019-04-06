import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

import logo from '../../resources/images/logo.svg';

import './NavBar.scss';

class NavBar extends Component {
  isSelfTest = (e) => {
    const thisPath = this.props.history.location.pathname;  
    if (thisPath === '/self_test') {
      e.preventDefault();
      const nextPath = e.target.getAttribute('href');
      if (nextPath !== '/self_test') {
        this.props.showModal(e.target.getAttribute('href'))
      }
    } 
  }
  render() {
    return (
      <nav className="nav-bar">
          <Link 
            to='/'
            className="navbar-logo-link"
            onClick={this.isSelfTest}>
              <img className="nav-logo" alt='logo' src={logo} />
          </Link>
        <ul className="nav-list">
          <li className="nav-list-element">
            <NavLink 
              to='/self_test' 
              className="nav-link" 
              onClick={this.isSelfTest}>Self Test</NavLink>
            <div className="link-line"/>
          </li>
          <li className="nav-list-element">
            <NavLink 
              to='/about' 
              className="nav-link"
              onClick={this.isSelfTest}>About</NavLink>
            <div className="link-line"/>
          </li>
          <li className="nav-list-element">
            <NavLink 
              to='/api' 
              className="nav-link"
              onClick={this.isSelfTest}>API</NavLink>
            <div className="link-line"/>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(NavBar);
