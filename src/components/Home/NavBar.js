import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from '../pictures/hypnose_vins_logo.png';
import { slide as Menu } from 'react-burger-menu';

const NavBar = () => {
  return (
    <div className='navbarBody'>
      <img
        src={logo}
        alt='logo hypnose and wine'
        className='navbarLogo'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <div className='navbarLink'>
        <Link to='/contact'>
          <p>Contact</p>
        </Link>
        <Link to='/contact'>
          <p>Contact</p>
        </Link>
        <Link to='/contact'>
          <p>Contact</p>
        </Link>
        <Link to='/contact'>
          <p></p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
