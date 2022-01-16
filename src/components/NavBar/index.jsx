// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/bagylogo.png';
import '../../style/navBar.css';
import NAV_PATHS from './navPaths';

export default function NavBar() {
  const navLinksMapping = NAV_PATHS.map(({ option, path, icon }, index) => {
    return (
      <NavLink
        to={path}
        key={index}
        className='navbar-option'
        style={({ isActive }) => ({
          // color: isActive ? '#d9d9d9' : '#d9d9d9',
          textDecoration: 'none',
          color: isActive ? '#fff' : '#545e6f',
        })}
      >
        <li>
          {icon} {option}
        </li>
      </NavLink>
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
