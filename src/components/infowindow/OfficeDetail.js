import React from 'react';
import purify from 'dompurify';

import Links from './Links';
import Image from './Image';

const OfficeDetail = (props) => {

  const details = props.office.properties;

  function createMarkup(narrative) {
    return {__html: purify.sanitize(narrative)};
  }

  return (
    <div>
      <Image src={details.image} alt={details.alt} caption={details.caption} link={details.imageUrl}/>
      <Links office={details}/>
      <div className='infowindow-wrap'>
        <p dangerouslySetInnerHTML={createMarkup(details.narrative)}></p>
        <h3>Address</h3>
        <address>
          {details.address} <br />
          {details.city}, {details.state}
        </address>
      </div>
    </div>
  )
}

export default OfficeDetail;
