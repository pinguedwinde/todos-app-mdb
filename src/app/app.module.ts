import { TodoService } from './shared/services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, HeaderComponent, LoginComponent],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
