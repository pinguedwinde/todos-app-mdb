import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  constructor() {}

  public fetchTodos(): Observable<Todo[]> {
    return timer(2000).pipe(
      map(() => [
        {
          id: '1',
          message: 'Eat some great Pizza',
          done: true,
        },
        {
          id: '2',
          message: 'Have a rest on Weekend',
          done: true,
        },
      ])
    );
  }
}
