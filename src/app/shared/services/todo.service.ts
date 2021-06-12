import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  public todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([
    {
      message: 'Eat some great Pizza',
      done: true,
      order: 1,
    },
  ]);

  constructor() {}

  public addTodo(todo: Todo) {
    todo.order = this.todos$.value.length + 1;
    this.todos$.next([...this.todos$.value, todo]);
  }

  public deleteTodo(index: number) {
    this.todos$.next(this.todos$.value.filter((v, i) => i !== index));
  }

  public toggleTodo(index: number) {
    const currentTodos = this.todos$.value;
    currentTodos[index].done = !currentTodos[index].done;
    this.todos$.next(currentTodos);
  }
}
