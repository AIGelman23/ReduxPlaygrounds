import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';

const store = configureStore(); 

store.dispatch((dispatch, getState) => {
  // Call an API
  // When the promise is resolved => dispatch() 
  dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] })
  console.log(getState());
  // If the promise is rejected => dispatch() 
});

// in redux actions should be plain objects with a type property
// we can't dispatch a function here
//
// function being dispatched allows us to call an api endpoint
// we are dealing with promises
// when the promise is resolved => dispatch()
// if the promise is rejected => dispatch() 
//
// we can give store a function to dispatch an action by applying
// middleware

// let us say in our action creators we do not have 
// access to our store object
// -- if we import this configureStore() function 
// from the configureStore method we get a different store 
// object 
// to make this more flexible we should pass
// a reference to the dispatch function 
// 
// back in our middleware function, we know 
// that this store parameter is an object with 
// two methods, dispatch and get state 
// so we can use object destructuring 

// if the data that we have is already available
// then there is no need to refetch it from the store
// 
// with this simple middleware, we can easily dispatch 
// functions which allows us to make Asynchronous API calls
// That doesnt mean that in every application
// that we have to create this middleware 
// this middleware is already built for us 
// called Thunk or Redux Thunk
//
// If you are using Redux Toolkit you already
// get this middleware that is another reason 
// why Redux Toolkit can be used in every application
