import { Todo } from '../models/todo.model';
import { TodoAction, TodoActionsType } from './todos.actions';

export interface TodoState {
  datas: Todo[];
  loading: boolean;
  loaded: boolean;
  error: null;
}

export const INITIAL_STATE: TodoState = {
  datas: [],
  loading: false,
  loaded: false,
  error: null,
};

export function todosReducer(
  state: TodoState = INITIAL_STATE,
  action: TodoAction
): TodoState {
  console.log(state);
  switch (action.type) {
    case TodoActionsType.FETCH_TODO:
      return {
        ...state,
        loading: true,
      };
    case TodoActionsType.FETCH_SUCCESS_TODO:
      return {
        ...state,
        datas: action.payload,
        loading: false,
        loaded: true,
        error: null,
      };
    case TodoActionsType.FETCH_ERROR_TODO:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
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
