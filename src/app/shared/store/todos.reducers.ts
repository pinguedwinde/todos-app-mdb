import { Todo } from '../models/todo.model';
import { TodoAction, TodoActionsType } from './todos.actions';

export interface TodoState {
  datas: {
    [todoId: string]: Todo;
  };
  loading: boolean;
  loaded: boolean;
  error: null;
}

export const INITIAL_STATE: TodoState = {
  datas: {},
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
        datas: action.payload.reduce(
          (accumulator: { [todoId: string]: Todo }, currentTodo: Todo) => {
            accumulator[currentTodo.id] = currentTodo;
            return accumulator;
          },
          { ...state.datas }
        ),
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
        datas: {
          ...state.datas,
          [Object.keys(state.datas).length + 1]: {
            ...action.payload,
            id: (Object.keys(state.datas).length + 1).toString(),
          },
        },
      };
    case TodoActionsType.DELETE_TODO:
      const remove = { ...state.datas };
      delete remove[action.payload];
      return {
        ...state,
        datas: remove,
      };
    case TodoActionsType.TOGGLE_TODO:
      return {
        ...state,
        datas: {
          ...state.datas,
          [action.payload]: {
            ...state.datas[action.payload],
            done: !state.datas[action.payload].done,
          },
        },
      };
    default:
      return state;
  }
}
