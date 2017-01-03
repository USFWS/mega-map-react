import React from 'react';
import { Link } from 'react-router';
import Logo from '../icons/Logo';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul className='main-nav'>
          <li>
            <a href="https://fws.gov/southeast">
              <Logo />
            </a>
          </li>
          <li><Link to="/mega-map-react/map" activeClassName="active"><span>Map</span></Link></li>
          <li><Link to="/mega-map-react/list" activeClassName="active"><span>List</span></Link></li>
          <li><Link to="/mega-map-react/about" activeClassName="active"><span>About</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
