"use strict";

import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    onChange() {
    }

    render() {
        return (
            <div>
                <ul>
                    { this.state.allTodo.map((todo, key) => (<li key={key}>{todo}</li>)) }
                </ul>
            </div>
        );
    }
}

export default TodoList;