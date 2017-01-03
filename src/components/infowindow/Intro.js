import React from 'react';
import Logo from '../icons/Logo';
import Geolocate from '../icons/Geolocate';
import Email from '../icons/Email';
import ZoomOut from '../icons/ZoomOut';
import Fork from '../icons/Fork';
import BlueGoose from '../icons/BlueGoose';
import Office from '../icons/Office';
import Hatchery from '../icons/Hatchery';
import layerSwitcher from '../../images/layers-2x.png';

const Intro = (props) => {
  return (
    <div className="infowindow-intro">

      <Logo />

      <p className="infowindow-wrap">Use the map to find a U.S. Fish and Wildlife Service field office, National Wildlife Refuge, or a National Fish Hatchery near you. For more information about a specific office click an office marker on the map or use the search box above.</p>

      <h2>Office Types</h2>

      <ul className="icon-list">
        <li><BlueGoose /> National Wildlife Refuge</li>
        <li><Hatchery /> National Fish Hatchery</li>
        <li><Office /> Field Station</li>
      </ul>

      <h2>Map Icons</h2>

      <ul className="icon-list">
        <li><img src={layerSwitcher} alt='Switch between basemaps'/>Toggle map layers</li>
        <li><Geolocate /> Find nearest offices</li>
        <li><ZoomOut /> Zoom out to display all offices</li>
        <li><Email /> Email the webmaster</li>
        <li><Fork /> View the code on <a href='https://github.com/usfws/mega-map-react' target="_blank">GitHub</a></li>
      </ul>

    </div>
  );
}

export default Intro;
