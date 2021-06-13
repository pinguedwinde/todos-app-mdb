import { Action } from '@ngrx/store';
import { Todo } from '@todo-list/shared/models/todo.model';
export enum TodoActionsType {
  CREATE_TODO = '[TODO] - create todo',
  DELETE_TODO = '[TODO] - delete todo',
  TOGGLE_TODO = '[TODO] - toggle todo',
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

export type TodoAction = CreateTodoAction | DeleteTodoAction | ToggleTodoAction;
