import store from './store';

const unsubscribe = store.subscribe(() => {
  console.log("Store change!", store.getState());
}); 

// UI components should subscribe to 
// the store so they get notified 
// when the state of the store changes

// If the current UI component is not 
// going to be visible we should unsubscribe
// from the store (avoid memory leaks)

store.dispatch({
  type: "BUG_ADDED",
  payload: {
    description: "Bug1"
  }
});

unsubscribe(); 

// we did not get notified a second time
// because we unsubscribed

store.dispatch({
  type: "BUG_REMOVED",
  payload: {
    id: 1
  }
});

console.log(store.getState());