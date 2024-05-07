import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'src/shared';
import productsList from 'src/app/slices/product-list-slice/product-list-slice';
import promoList from 'src/app/slices/promo-list-slice/promo-list-slice';
import cameraData from 'src/app/slices/camera-slice/camera-slice';
import similarList from 'src/app/slices/similar-list-slice/similar-list-slice';
import reviewsList from 'src/app/slices/reviews-list-slice/reviews-list-slice';
import userReview from 'src/app/slices/user-review-slice/user-review-slice';
import showAddModal from 'src/app/slices/add-modal-slice/add-modal-slice';
import sortFilterOptions from 'src/app/slices/sort-filter-slice/sort-filter-slice';
import basketList from 'src/app/slices/basket-slice/baskt-slice';


const api = createAPI();

const rootReducer = combineReducers({
  productsList,
  promoList,
  cameraData,
  similarList,
  reviewsList,
  userReview,
  showAddModal,
  sortFilterOptions,
  basketList,
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
