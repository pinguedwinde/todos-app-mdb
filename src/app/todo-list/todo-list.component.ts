import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Todo } from '@todo-list/shared/models/todo.model';
import { TodoService } from '@todo-list/shared/services/todo.service';
import { State } from '@todo-list/shared/store/index';
import {
  selectedTodoSelector,
  todosListArraySelector,
  todosListSelector,
} from '@todo-list/shared/store/store.selectors';

import {
  CreateTodoAction,
  DeleteTodoAction,
  ToggleTodoAction,
} from '@todo-list/shared/store/todos.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.pipe(
    select(todosListArraySelector)
  );
  public selectedTodo$: Observable<Todo> = this.store.pipe(
    select(selectedTodoSelector)
  );
  public message: string = '';

  constructor(private todoService: TodoService, private store: Store<State>) {}
  ngOnInit(): void {}

  public addTodo() {
    if (this.message.trim() !== '') {
      this.store.dispatch(
        new CreateTodoAction({
          message: this.message,
          done: false,
        })
      );
    }
    this.message = '';
  }

  public toggleTodo(id: string) {
    this.store.dispatch(new ToggleTodoAction(id));
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new DeleteTodoAction(id));
  }
}
