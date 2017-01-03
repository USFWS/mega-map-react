import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import configureStore from './store/configureStore';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import MapView from './components/map/MapView';
import ListView from './components/list/ListView';
import './css/index.css';

// const store = configureStore();

render((
  // <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ListView}/>
        <Route path="about" component={AboutPage}/>
        <Route path="list" component={ListView}/>
        <Route path="map" component={MapView}/>
        <Route path="*" component={ListView}/>
      </Route>
    </Router>
  // </Provider>
), document.getElementById('root'));
