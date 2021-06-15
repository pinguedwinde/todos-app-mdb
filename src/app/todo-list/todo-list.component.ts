import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Todo } from '@todo-list/shared/models/todo.model';
import { TodoService } from '@todo-list/shared/services/todo.service';
import { State } from '@todo-list/shared/store/index';
import {
  selectedTodoSelector,
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
    select(todosListSelector)
  );
  public selectedTodo$: Observable<Todo> = this.store.pipe(
    select(selectedTodoSelector)
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
          id: (index + 1).toString(),
          message: this.message,
          done: false,
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
