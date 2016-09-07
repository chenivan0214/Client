"use strict";

import AppDispatcher from '../dispatcher/app.dispatcher.js';
import { ADD_TODO, REMOVE_ALL_TODO } from '../constant/todo.constant.js';
import { EventEmitter } from 'events';

const store = {
    allTodo: []
};

class TodoStoreClass extends EventEmitter {
    addChangeListener(callback) {
        this.on(ADD_TODO, callback);
    }

    removeAllChangeListener(callback) {
        this.on(REMOVE_ALL_TODO, callback);
    }

    getAllTodo() {
        return store.allTodo;
    }
}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((action) => {
    switch (action.type) {
        case ADD_TODO:
            store.allTodo.push(action.payload.text);
            TodoStore.emit(ADD_TODO);
            break;
        case REMOVE_ALL_TODO:
            store.allTodo.length = 0;
            TodoStore.emit(REMOVE_ALL_TODO);
            break;
        default:
            return true;
    }

    return true;
});

export default TodoStore;