import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { MdbModule } from 'mdb-angular-ui-kit';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { TodoService } from './shared/services/todo.service';

import { APP_ROUTES } from './app.routing';
import { LoginComponent } from './login/login.component';
import { REDUCERS } from './shared/store';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot(REDUCERS),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
