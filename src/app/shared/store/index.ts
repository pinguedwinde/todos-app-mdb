import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, Action } from '@ngrx/store';
import { RouterStateUrl } from './router.reducer';
import { TodoState, todosReducer } from './todos.reducers';

export interface State {
  todos: TodoState;
  router: RouterReducerState<RouterStateUrl>;
}

export const REDUCERS: ActionReducerMap<State, Action> = {
  todos: todosReducer,
  router: routerReducer,
};
