"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

/**
 ** stage
 ** - state & props
 ** - lifecycle
 **/
import Sample from '../component/basic_react_on_es2015.js';
ReactDOM.render(<Sample/>, document.getElementById('app'));

//trigger other life cycle on basic_react_on_es2015.js
setTimeout(() => {
    ReactDOM.render(<Sample otherProps={'nothing'}/>, document.getElementById('app'));
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 10000);