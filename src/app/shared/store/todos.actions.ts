import { Todo } from '@todo-list/shared/models/todo.model';
export enum TodoActionsType {
  CREATE_TODO = '[TODO] - create todo',
  DELETE_TODO = '[TODO] - delete todo',
  TOGGLE_TODO = '[TODO] - toggle todo',
}

export class CreateTodoAction {
  readonly type = TodoActionsType.CREATE_TODO;
  constructor(public payload: Todo) {}
}
export class DeleteTodoAction {
  readonly type = TodoActionsType.DELETE_TODO;
  constructor(public payload: Todo) {}
}
export class ToggleTodoAction {
  readonly type = TodoActionsType.TOGGLE_TODO;
  constructor(public payload: Todo) {}
}
