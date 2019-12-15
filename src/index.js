import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { gnomesReducer } from './store/reducers/reducers';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

const gnomeApp = combineReducers({
    gnomes: gnomesReducer,
})

const store = createStore(gnomeApp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.register();
