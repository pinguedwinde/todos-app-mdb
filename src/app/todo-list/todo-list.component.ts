import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { Todo } from '@todo-list/shared/models/todo.model';
import { TodoService } from '@todo-list/shared/services/todo.service';
import { State } from '@todo-list/shared/store/index';
import { TodoState } from '@todo-list/shared/store/todos.reducers';
import {
  CreateTodoAction,
  DeleteTodoAction,
  ToggleTodoAction,
} from './../shared/store/todos.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.pipe(
    select('todos'),
    map((todoState: TodoState) => todoState.datas)
  );
  public message: string = '';

  constructor(private todoService: TodoService, private store: Store<State>) {}
  ngOnInit(): void {}

  public addTodo() {
    if (this.message.trim() !== '') {
      let index = 0;
      this.todos$.subscribe((todos: Todo[]) => (index = todos.length));
      this.store.dispatch(
        new CreateTodoAction({
          message: this.message,
          done: false,
          order: index + 1,
        })
      );
    }
    this.message = '';
  }

  public toggleTodo(index: number) {
    this.store.dispatch(new ToggleTodoAction(index));
  }

  public deleteTodo(index: number) {
    this.store.dispatch(new DeleteTodoAction(index));
  }
}
