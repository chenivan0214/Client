import React from 'react';
import ReactDOM from 'react-dom';

//var data = {
//        firstName: "Ivan",
//        lastName: "Chen"
//    };

//import Sample01 from './component/sample01.component.js';
//ReactDOM.render(<Sample01 data={data}/>, document.getElementById('app'));

var aryList = [
        {id: 1, text: "No.1"},
        {id: 2, text: "No.2"},
        {id: 3, text: "No.3"},
        {id: 4, text: "No.4"},
        {id: 5, text: "No.5"}
    ];

import Sample02 from './component/sample02.component.js';
ReactDOM.render(<Sample02 data={aryList}/>, document.getElementById('app'));