"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

/**
 ** stage
 ** - state & props
 **/
var data = {
        firstName: "Ivan",
        lastName: "Chen"
    };

import Sample from '../component/basic_react_on_native.js';
ReactDOM.render(<Sample data={data}/>, document.getElementById('app'));