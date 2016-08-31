"use strict";

import React from 'react';
import TodoHeader from '../redux/container/todo_header.container.js';
import TodoList from '../redux/container/todo_list.container.js';

class Sample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <TodoHeader/>
                <TodoList/>
            </div>
        );
    }
}

export default Sample;