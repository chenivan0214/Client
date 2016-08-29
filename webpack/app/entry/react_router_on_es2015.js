"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/**
 ** stage
 ** - react-router
 **/
import { Sample, Home, Store, StoreHasName } from '../component/react_router_on_es2015.js';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Sample}>
            <IndexRoute component={Home}/>
            <Route path='/store' component={Store}/>
            <Route path='store/:name' component={StoreHasName}/>
        </Route>
    </Router>
    , document.getElementById('app'));