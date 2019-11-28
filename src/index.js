import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { Provider } from 'react-redux'
import './index.css';
import App from './App';
// import store from './store'
import * as serviceWorker from './serviceWorker';

render(
    // <Provider>
        <HashRouter>
            <App />
        </HashRouter>
    // </Provider>
    ,
    document.getElementById('root'));

serviceWorker.unregister();
