"use strict";

import React from 'react';
import TodoAction from '../flux/action/todo.action.js';
import TodoStore from '../flux/store/todo.store.js';

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

class TodoHeader extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
        this.onRemoveAllClick = this.onRemoveAllClick.bind(this);

        this.state = { text: "" };
    }

    onChange(event) {
        this.setState({
            text: event.target.value,
        });
    }

    onAddClick() {
        TodoAction.addTodo(this.state.text);
        this.setState({ text: "" });
    }

    onRemoveAllClick() {
        TodoAction.removeAllTodo();
        this.setState({ text: "" });
    }

    onDisableClick() {
        TodoStore.disableChangeListener(function(){});
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div>
                    <input value={this.state.text} type="text" onChange={this.onChange}/>
                    <button onClick={this.onAddClick}>Add</button>
                    <button onClick={this.onRemoveAllClick}>Clear All</button>
                </div>
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state = { allTodo: [] };
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange);
        TodoStore.removeAllChangeListener(this.onChange);
    }

    onChange() {
        this.setState({ allTodo: TodoStore.getAllTodo() });
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

export default Sample;