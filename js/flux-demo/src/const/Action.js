import TodoDispatcher from './Dispatcher';
import TodoActionTypes from './ActionTypes';

export default {
    addTodo(text) {
        TodoDispatcher.dispatch({type: TodoActionTypes.ADD_TODO, text});
    },
    deleteTodo(id) {
        TodoDispatcher.dispatch({type: TodoActionTypes.DELETE_TODO, id});
    }
};