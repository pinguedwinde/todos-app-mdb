import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export interface TodoState {
  datas: Todo[];
}

export const INITIAL_STATE: TodoState = {
  datas: [
    {
      message: 'Eat some great Pizza',
      done: true,
      order: 1,
    },
  ],
};

export function todosReducer(
  state: TodoState = INITIAL_STATE,
  action: Action
): TodoState {
  console.log(state);
  console.log(action);

  return state;
}
