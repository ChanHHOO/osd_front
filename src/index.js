<<<<<<< HEAD
import 'core-js/es6/map'
import 'core-js/es6/set'

import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

// redux
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducers from './reducers'
// import thunk from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
// serviceWorker.unregister()
=======
import 'core-js/es6/map';
import 'core-js/es6/set';

import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
