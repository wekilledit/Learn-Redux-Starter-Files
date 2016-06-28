import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  //es6: if key = value then we don't need 'key: value' syntax, just 'value'
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory, store);

export {store as default, history};
