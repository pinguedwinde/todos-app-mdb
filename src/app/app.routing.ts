import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TodoListComponent },
  { path: 'todos/:id', component: TodoListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' },
];
