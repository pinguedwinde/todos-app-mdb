import { Todo } from '../models/todo.model';
import { TodoAction, TodoActionsType } from './todos.actions';

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
  action: TodoAction
): TodoState {
  console.log(state);
  switch (action.type) {
    case TodoActionsType.CREATE_TODO:
      return {
        ...state,
        datas: [...state.datas, action.payload],
      };
    case TodoActionsType.DELETE_TODO:
      return {
        ...state,
        datas: state.datas.filter(
          (todo: Todo, index: number) => index !== action.payload
        ),
      };
    case TodoActionsType.TOGGLE_TODO:
      return {
        ...state,
        datas: state.datas.map((todo: Todo, index: number) =>
          index === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
}
