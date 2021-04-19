import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import analyticsReduxMiddleware from './analytics';
import Home from './pages/Home';
import reducers from './reducers';
import { QueryParamProvider } from 'use-query-params';
import history from './history';
import 'bulma/css/bulma.css';

const middleware = [thunk, analyticsReduxMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

const App = () => (
  <QueryParamProvider history={history}>
    <Provider store={store}>
      <Home />
    </Provider>
  </QueryParamProvider>
);

export default App;
