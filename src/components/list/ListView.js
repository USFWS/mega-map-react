import React from 'react';
import Search from '../autocomplete/Search';
import ResultsList from '../autocomplete/ResultsList';

const ListView = (props) => {
  return (
    <div className="list-view">
      <h1>U.S. Fish and Wildlife Service Offices</h1>
      <p>Search by Office Name, City, or State.</p>
      <Search search={props.search}
        query={props.query}
        randomOffice={props.randomOffice.properties.name}
       />
      <ResultsList filtered={props.filtered} />
    </div>
  );
}

export default ListView;
