# A TODO-LIST APP with MDB 5 and Angular

- **[>> Angular 11]**
- **[>> Bootstrap]**
- **[>> Material Design 2.0 UI KIT]**

### Angular 11 & Bootstrap 5 & Material Design 2.0 UI KIT

**[>> Get Started in 4 steps](https://mdbootstrap.com/docs/b5/angular/getting-started/installation/)**

**[>> MDBAngular 5 Demo](https://mdbootstrap.com/docs/b5/angular#demo)**

Many stages for building this app : We're using NgRX in Angular

## Stage 0 : Base of the Todo

Creation of the skeleton : a base for the app. In this stage, we don't have the **Redux Achitecture**. We only use a **Services Arhcitecture**.

## Stage 1 : NgRx Store

We are beginning to use the NgRX : the **store**.  
First we have to install it in the app. Go to to the root folder and run :

```sh
$ npm install @ngrx/store
```

Then import the library (**`StoreModule`**) into a module and start using the **store**.

### Actions Pipeline

**Action (dispatch) => Reducers => New State (state) => Store**

## Stage 2 : Effects

- We want to use async methods in our ngrx achitecture. But presently, the **reducers** are **pure functions**. They don't allow async call http that are random and provide possibily different response.
- So we use **Effects** to deal with that. We need to add actions. These actions are about of fetching data (simulation of fetching data from http server).
- Install then a package for this aim :

```sh
$ npm i @ngrx/effects
```

Note that this is out of the store component but is a tool of ngrx.

### NgRX Devtools

There's a devtools package available for ngrx. Redux has also a plugin for the browser that may be very helpful for debbuging the Store and the NgRx state in general : it's the **store-devtools**
Install the package

```sh
$ npm i @ngrx/store-devtools
```

Then add or install the browser addon : **Redux DevTools**.

## Stage 3 : RouterStore

- This feature allows the **Store** to get connected to **Router** of an Angular application.
- The **Router** is part of the **State** of the application. But it would not be represented in the **Store**.
- We use the **router-store** to get some information about the routing via the Store state. Without this feature, we don't have these information in the state and we use **`ActivatedRoute`** for example where we need them.
- At any change happened in the routing system, the **router-store** will emit an event.
- Run this command to add the related package and import de **`StoreRouterConnectingModule`** :

```sh
$ npm i @ngrx/router-store
```

- We import the module where we define a key name for the **routerReducer**

```ts
StoreRouterConnectingModule.forRoot({
  stateKey: 'router',
}),
```

- We add the **routerReducerState** in our State and in our reducers. But this a the default routerReducerState and will bring all the information the Router that are not all interesting. So we are going to customize this routerReducerState with just our needed properties.
