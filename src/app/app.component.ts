import { FetchTodoAction } from './shared/store/todos.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './shared/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.store.dispatch(new FetchTodoAction());
  }
}
