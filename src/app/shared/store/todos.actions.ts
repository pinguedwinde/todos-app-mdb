import { Action } from '@ngrx/store';
import { Todo } from '@todo-list/shared/models/todo.model';
export enum TodoActionsType {
  CREATE_TODO = '[TODOS] - create todo',
  DELETE_TODO = '[TODOS] - delete todo',
  TOGGLE_TODO = '[TODOS] - toggle todo',
  FETCH_TODO = '[TODOS] - fetch todo',
  FETCH_SUCCESS_TODO = '[TODOS] - success fetch todo',
  FETCH_ERROR_TODO = '[TODOS] - error fetch todo',
}

export class FetchTodoAction implements Action {
  readonly type = TodoActionsType.FETCH_TODO;
}
export class FetchSuccessTodoAction implements Action {
  readonly type = TodoActionsType.FETCH_SUCCESS_TODO;
  constructor(public payload: Todo[]) {}
}
export class FetchErrorTodoAction implements Action {
  readonly type = TodoActionsType.FETCH_ERROR_TODO;
  constructor(public payload: any) {}
}
export class CreateTodoAction implements Action {
  readonly type = TodoActionsType.CREATE_TODO;
  constructor(public payload: Todo) {}
}
export class DeleteTodoAction implements Action {
  readonly type = TodoActionsType.DELETE_TODO;
  constructor(public payload: number) {}
}
export class ToggleTodoAction implements Action {
  readonly type = TodoActionsType.TOGGLE_TODO;
  constructor(public payload: number) {}
}

export type TodoAction =
  | FetchTodoAction
  | FetchSuccessTodoAction
  | FetchErrorTodoAction
  | CreateTodoAction
  | DeleteTodoAction
  | ToggleTodoAction;
