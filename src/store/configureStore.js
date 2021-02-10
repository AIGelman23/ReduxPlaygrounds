import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
// import func from './middleware/func';
import toast from './middleware/toast';

export default function() {
  const store = configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ distination: "console" }),
      toast
    ]
  });
  return store;
}

