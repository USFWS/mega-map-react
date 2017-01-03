import objectAssign from 'object-assign';

function searchReducer(state = {}, action) {
  switch(action.type) {
    case 'SEARCH_ACTION':
      return objectAssign({}, state, { query: action.query });

    default:
      return state;
  }
}

export default searchReducer;
