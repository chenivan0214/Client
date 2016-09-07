"use strict";

import AppDispatcher from '../dispatcher/app.dispatcher.js';
import { ADD_TODO, REMOVE_ALL_TODO } from '../constant/todo.constant.js';

class TodoActionClass {
    addTodo(text) {
        const action = {
            type: ADD_TODO,
            payload: { text }
        };

        AppDispatcher.handleAction(action);
    }

    removeAllTodo() {
        const action = {
            type: REMOVE_ALL_TODO,
            payload: {}
        };

        AppDispatcher.handleAction(action);
    }
}

const TodoAction = new TodoActionClass();

export default TodoAction;