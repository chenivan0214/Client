"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

/**
 ** stage
 ** - redux
 **/
import {Provider} from 'react-redux';
import App from '../redux/container/app.js';
import configureStore from '../redux/store/configure.js';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);