import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'src/shared';
import productsList from 'src/app/slices/product-list-slice';
import promoList from 'src/app/slices/promo-list-slice';
import cameraData from 'src/app/slices/camera-slice';
import similarList from 'src/app/slices/similar-list-slice';
import reviewsList from 'src/app/slices/reviews-list-slice'


const api = createAPI();

const rootReducer = combineReducers({
  productsList,
  promoList,
  cameraData,
  similarList,
  reviewsList,
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
