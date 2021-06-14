# A TODO-LIST APP with MDB 5 and Angular

- **[>> Angular 11]**
- **[>> Bootstrap]**
- **[>> Material Design 2.0 UI KIT]**

### Angular 11 & Bootstrap 5 & Material Design 2.0 UI KIT

**[>> Get Started in 4 steps](https://mdbootstrap.com/docs/b5/angular/getting-started/installation/)**

**[>> MDBAngular 5 Demo](https://mdbootstrap.com/docs/b5/angular#demo)**

Many stages for building this app : We're using NgRX in Angular

## Stage 0

Creation of the skeleton : a base for the app. In this stage, we don't have the **Redux Achitecture**. We only use a **Services Arhcitecture**.

## Stage 1

We are beginning to use the NgRX : the **store**.  
First we have to install it in the app. Go to to the root folder and run :

```sh
$ npm install @ngrx/store
```

Then import the library (**`StoreModule`**) into a module and start using the **store**.

### Actions Pipeline

**Action (dispatch) => Reducers => New State (state) => Store**

## Stage 2

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
