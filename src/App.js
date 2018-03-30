import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bulma/css/bulma.css';
import Home from './pages/Home'
import reducers from './reducers';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
    <Provider store={store}>
        <Home/>
    </Provider>
);

export default App;
