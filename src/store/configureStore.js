import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';


export default function() {
  const store = configureStore({
    reducer
  });
  return store;
}

