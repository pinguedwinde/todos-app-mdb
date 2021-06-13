import { ActionReducerMap, Action } from '@ngrx/store';
import { TodoState, todosReducer } from './todos.reducers';

export interface State {
  todos: TodoState;
}

export const REDUCERS: ActionReducerMap<State, Action> = {
  todos: todosReducer,
};
