"use strict";

import React from 'react';

class TodoHeader extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
        this.onRemoveAllClick = this.onRemoveAllClick.bind(this);

        this.state = { text: "" };
    }

    onChange(event) {
    }

    onAddClick() {
    }

    onRemoveAllClick() {
    }

    onDisableClick() {
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

export default TodoHeader;