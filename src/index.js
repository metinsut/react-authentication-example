import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import {Provider} from 'react-redux';
import './assets/css/app.css';
import {receiveSites, sessionUser} from "./actions/index";


const middleware = [thunk];


if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

let store = createStore(reducers, applyMiddleware(...middleware));

store.dispatch(receiveSites());
store.dispatch(sessionUser());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
