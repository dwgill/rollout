import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Home from './pages/Home';
import reducers from './reducers';
import 'bulma/css/bulma.css';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
