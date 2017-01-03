import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import immutableState from 'redux-immutable-state-invariant';


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(immutableState())
  );
}
