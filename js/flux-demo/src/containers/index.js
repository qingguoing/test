import AppView from '../view/AppView';
import {Container} from 'flux/utils';
import TodoAction from '../const/Action';
import TodoStore from '../store/TodoStore';

function getStores() {
    // 必须是一个数组
    return [TodoStore];
}

function getState() {
    return {
        todos: TodoStore.getState(),

        onAdd: TodoAction.addTodo,
        onDelete: TodoAction.deleteTodo
    };
}

export default Container.createFunctional(AppView, getStores, getState);