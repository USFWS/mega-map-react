import React from 'react';

const ResultsBrief = (props) => {
  const activeClass = (props.showBriefResults) ? 'active' : 'hidden';

  const onClick = (e) => props.selectOffice(e.target.innerHTML);

  return (
    <ul className={`results-list ${activeClass}`}>
      {props.filtered.map((office, i) => {
        return (
          <li key={i}>
            <button className='office-button'
              onClick={onClick}
              onFocus={props.changeFocus}
              onBlur={props.changeFocus}>
                {office.properties.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ResultsBrief;
