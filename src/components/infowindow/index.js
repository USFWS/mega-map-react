import React from 'react';
import Intro from './Intro';
import OfficeDetail from './OfficeDetail';

const Infowindow = (props) => {
  const display = (props.infowindowVisible) ? 'active' : '';
  const isOffice = props.office.hasOwnProperty('properties');

  return (
    <aside className={`infowindow ${display}`}>
      <button className='detail-toggle' onClick={props.toggleInfowindow}>
        {props.infowindowVisible ? '▼' : '▲'}
      </button>
      <div className='infowindow-content'>
        {isOffice ? <h2>{props.office.properties.name}</h2> : <h1>Southeast Region Offices Map</h1>}
        { isOffice ? <OfficeDetail office={props.office}/> : <Intro />}
      </div>
    </aside>
  );
}

export default Infowindow;
