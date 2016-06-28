import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl'

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        //these next two lines are the children that we pass into main
        <IndexRoute component={PhotoGrid}></IndexRoute> //matching root
        <Route path='/view/:postId' component={Single}></Route> //matching path deeper than root
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
