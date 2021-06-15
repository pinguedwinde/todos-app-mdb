import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';

import { MdbModule } from 'mdb-angular-ui-kit';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { TodoService } from './shared/services/todo.service';
import { TodosEffects } from './shared/store/todos.effects';

import { APP_ROUTES } from './app.routing';
import { LoginComponent } from './login/login.component';
import { REDUCERS } from './shared/store';
import { MyRouterStateSerializer } from './shared/store/router.reducer';

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
    EffectsModule.forRoot([TodosEffects]),
    StoreModule.forRoot(REDUCERS),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'todo',
    }),
  ],
  providers: [
    TodoService,
    { provide: RouterStateSerializer, useClass: MyRouterStateSerializer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
