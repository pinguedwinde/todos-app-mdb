import { TodoService } from '@todo-list/shared/services/todo.service';
import {
  TodoActionsType,
  FetchTodoAction,
  FetchSuccessTodoAction,
  FetchErrorTodoAction,
} from './todos.actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosEffects {
  @Effect()
  public fetchTodos$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionsType.FETCH_TODO),
    switchMap((fetchTodo: FetchTodoAction) => this.todoService.fetchTodos()),
    map((todos: Todo[]) => new FetchSuccessTodoAction(todos)),
    catchError((error) => of(new FetchErrorTodoAction(error)))
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
