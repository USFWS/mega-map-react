import React from 'react';
import purify from 'dompurify';

const Results = (props) => {

  function createMarkup(narrative) {
    return {__html: purify.sanitize(narrative)};
  }

  return (
    <ul className='results-list'>
      { props.filtered.map((office, i) => {
        return (
          <li key={i}>
            <h2>{office.properties.name}</h2>
            <p dangerouslySetInnerHTML={createMarkup(office.properties.narrative)}></p>
          </li>
        )
      }) }
    </ul>
  );
}

export default Results;
