import React from 'react';
import Fork from '../icons/Fork';
import Email from '../icons/Email';
import Geolocate from '../icons/Geolocate';
import ZoomOut from '../icons/ZoomOut';

const Sidecar = (props) => {

  function updateLocation () {
    props.updateNearest(true);
  }

  const loading = (props.findingNearest) ? 'loading' : '';
  const locateLabel = (props.findingNearest) ? 'Finding nearest offices...' : 'Find Nearest Offices';

  return (
    <ul className='sidecar'>
      <li>
        <button className="sidecar-link" onClick={updateLocation}>
          <span className='sidecar-label'>{locateLabel}</span>
          <Geolocate loading={loading} />
        </button>
      </li>
      <li>
        <button className='sidecar-link' onClick={props.zoomToFullExtent}>
          <span className='sidecar-label'>Zoom to Full Extent</span>
          <ZoomOut />
        </button>
      </li>
      <li>
        <a href='mailto:roy_hewitt@fws.gov?subject=Offices%20Mapper' className='sidecar-link'>
          <span className='sidecar-label'>Contact the Webmaster</span>
          <Email />
        </a>
      </li>
      <li>
        <a href='https://github.com/usfws/' target="_blank" className='sidecar-link'>
          <span className='sidecar-label'>Code on GitHub</span>
          <Fork />
        </a>
      </li>
    </ul>
  )
}

export default Sidecar;
