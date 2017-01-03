import React from 'react';
import { Link } from 'react-router';
import logo from '../../logo.svg';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul className='main-nav'>
          <li>
            <a href="https://fws.gov/southeast">
              <img src={logo} className="logo" alt="USFWS logo" />
            </a>
          </li>
          <li><Link to="/map" activeClassName="active"><span>Map</span></Link></li>
          <li><Link to="/list" activeClassName="active"><span>List</span></Link></li>
          <li><Link to="/about" activeClassName="active"><span>About</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
