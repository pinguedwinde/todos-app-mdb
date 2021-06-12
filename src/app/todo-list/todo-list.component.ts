import { Component, OnInit } from '@angular/core';
import { Todo } from '@todo-list/shared/models/todo.model';
import { TodoService } from '@todo-list/shared/services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.todoService.todos$.asObservable();
  public message: string = '';

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {}

  public addTodo() {
    if (this.message.trim() !== '')
      this.todoService.addTodo({ message: this.message, done: false });
    this.message = '';
  }

  public toggleTodo(index: number) {
    this.todoService.toggleTodo(index);
  }

  public deleteTodo(index: number) {
    console.log(index);
    this.todoService.deleteTodo(index);
  }
}
