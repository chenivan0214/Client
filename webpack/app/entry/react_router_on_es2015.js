"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/**
 ** stage
 ** - react-router
 **/
import { App, Home, Store, StoreHasName } from '../component/react_router_on_es2015.js';
console.log(Store);
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/store' component={Store}/>
            <Route path='store/:name' component={StoreHasName}/>
        </Route>
    </Router>
    , document.getElementById('app'));