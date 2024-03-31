import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'src/shared';


const api = createAPI();

const rootReducer = combineReducers({

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddeware) =>
    getDefaultMiddeware({
      thunk: {
        extraArgument: api,
      }
    })
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
