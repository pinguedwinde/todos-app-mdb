import { TodoState } from '@todo-list/shared/store/todos.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router.reducer';
import { Todo } from '../models/todo.model';

export const todosSelector = createFeatureSelector<TodoState>('todos');

export const routerSelector =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const myRouterStateSelector = createSelector(
  routerSelector,
  (routerState) => routerState.state
);

export const todosListSelector = createSelector(
  todosSelector,
  (todoState: TodoState) => todoState.datas
);

export const todosListArraySelector = createSelector(
  todosSelector,
  (todoState: TodoState) => {
    if (todoState.datas) {
      return Object.keys(todoState.datas).map(
        (todoId: string) => todoState.datas[todoId]
      );
    } else {
      return [];
    }
  }
);

export const selectedTodoSelector = createSelector(
  todosListSelector,
  myRouterStateSelector,
  (todos: { [todoId: string]: Todo }, routerStateUrl: RouterStateUrl) => {
    const todoId = routerStateUrl.params.id;
    if (todoId && todos) {
      return todos[todoId];
    } else {
      return null;
    }
  }
);
