import { ReduceStore } from 'flux/utils';
import TodoActionTypes from '../const/ActionTypes';
import TodoDispatcher from '../const/Dispatcher';

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                if (!action.text) return state;
                return [...state, action.text];
            case TodoActionTypes.DELETE_TODO:
                state.splice(action.id, 1);
                return [...state];
            default: return state;
        }
    }
};

export default new TodoStore();