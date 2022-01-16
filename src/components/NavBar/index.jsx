// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/bagylogo.png';
import '../../style/navBar.css';
import NAV_PATHS from './navPaths';

export default function NavBar() {
  const navLinksMapping = NAV_PATHS.map(({ option, path, icon }, index) => {
    return (
      <li key={index}>
        <NavLink className='navbar-option' to={path}>
          {icon} {option}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={logo} alt='logo bagy' className='logo' />
      </div>
      <ul>{navLinksMapping}</ul>
    </nav>
  );
}
