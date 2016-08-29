"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/**
 ** Sample01 on native js
 ** - component
 ** - state & props
 **/
//var data = {
//        firstName: "Ivan",
//        lastName: "Chen"
//    };

//import Sample01 from './component/sample01.component.js';
//ReactDOM.render(<Sample01 data={data}/>, document.getElementById('app'));

/**
 ** Sample02 on es2015
 ** - component
 ** - state & props
 ** - life cycle
 **/
//import Sample02 from './component/sample02.component.js';
//ReactDOM.render(<Sample02/>, document.getElementById('app'));

//trigger other life cycle on sample02
//setTimeout(() => {
//    ReactDOM.render(<Sample02 otherProps={'nothing'}/>, document.getElementById('app'));
//    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
//}, 10000);

/**
 ** Sample03 on es2015
 ** - router
 **/
//import { Sample03, Home, Store, StoreHasName } from './component/sample03.component.js';
//ReactDOM.render(
//    <Router history={hashHistory}>
//        <Route path='/' component={Sample03}>
//            <IndexRoute component={Home}/>
//            <Route path='/store' component={Store}/>
//            <Route path='store/:name' component={StoreHasName}/>
//        </Route>
//    </Router>
//    , document.getElementById('app'));