import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';

const store = configureStore(); 

store.dispatch({
  type: 'error',
  payload: { message: 'An error occurred.' }
});
