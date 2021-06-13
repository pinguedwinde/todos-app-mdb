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
