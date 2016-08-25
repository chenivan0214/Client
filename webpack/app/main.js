import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './component/sample.component.js';

var data = {
        firstName: "Ivan",
        lastName: "Chen"
    };

ReactDOM.render(<Sample data={data}/>, document.getElementById('app'));