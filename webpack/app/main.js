"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

//var data = {
//        firstName: "Ivan",
//        lastName: "Chen"
//    };

//import Sample01 from './component/sample01.component.js';
//ReactDOM.render(<Sample01 data={data}/>, document.getElementById('app'));

import Sample02 from './component/sample02.component.js';
ReactDOM.render(<Sample02/>, document.getElementById('app'));

//trigger other life cycle on sample02
setTimeout(() => {
    ReactDOM.render(<Sample02 otherProps={'nothing'}/>, document.getElementById('app'));
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 10000);