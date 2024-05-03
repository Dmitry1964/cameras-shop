import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchStatus, SortedOptions, TCamera, TSortFilter } from 'src/shared';
import { fetchCamerasList } from '../../actions/api-actions';

export type TCamerasListState = {
  cameras: TCamera[];
  filterList: TCamera[];
  status: FetchStatus;
  minPriceList: number;
  maxPriceList: number;
}

export const initialState: TCamerasListState = {
  cameras: [],
  filterList: [],
  status: FetchStatus.Idle,
  minPriceList: 0,
  maxPriceList: 0,
};

const productListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    defaultFilterList: (state, action: PayloadAction<TCamera[]>) => {
      state.filterList = action.payload;
    },
    filterCategory: (state, action: PayloadAction<TSortFilter>) => {
      if (action.payload.filterCategory) {
        state.filterList = state.cameras.filter((item) => item.category === action.payload.filterCategory);
      }
    },
    filterType: (state, action: PayloadAction<TSortFilter>) => {
      if (action.payload.filterType.length > 0) {
        state.filterList = state.filterList.filter((item) => action.payload.filterType.includes(item.type));
      }
    },
    filterLevel: (state, action: PayloadAction<TSortFilter>) => {
      if (action.payload.filterLevel.length > 0) {
        state.filterList = state.filterList.filter((item) => action.payload.filterLevel.includes(item.level));
      }
    },
    getMinPriceList: (state) => {
      if (state.filterList.length > 0) {
        state.minPriceList = [...state.filterList].sort((a: TCamera, b: TCamera) => a.price - b.price)[0].price;
      }
    },
    getMaxPriceList: (state) => {
      if (state.filterList.length > 0) {
        state.maxPriceList = [...state.filterList].sort((a: TCamera, b: TCamera) => b.price - a.price)[0].price;
      }
    },
    filterMinPrice: (state, action: PayloadAction<number>) => {
      state.filterList = state.filterList.filter((item) => item.price >= action.payload);
    },
    filterMaxPrice: (state, action: PayloadAction<number>) => {
      state.filterList = state.filterList.filter((item) => item.price <= action.payload);
    },

    sortList: (state, action: PayloadAction<TSortFilter>) => {
      if (action.payload.sortPricePopular === SortedOptions.Price) {
        state.filterList = [...state.filterList].sort((a: TCamera, b: TCamera) => a.price - b.price);
      }
      if (action.payload.sortPricePopular === SortedOptions.Popular) {
        state.filterList = [...state.filterList].sort((a: TCamera, b: TCamera) => a.rating - b.rating);
      }
      if (action.payload.sortUpDown === SortedOptions.SortDown) {
        if (action.payload.sortPricePopular === SortedOptions.Price) {
          state.filterList = [...state.filterList].sort((a: TCamera, b: TCamera) => b.price - a.price);
        }
        if (action.payload.sortPricePopular === SortedOptions.Popular) {
          state.filterList = [...state.filterList].sort((a: TCamera, b: TCamera) => b.rating - a.rating);
        }
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasList.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchCamerasList.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.cameras = action.payload;
      })

      .addCase(fetchCamerasList.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});


export const {
  filterCategory,
  filterType,
  filterLevel,
  defaultFilterList,
  sortList,
  getMaxPriceList,
  getMinPriceList,
  filterMinPrice,
  filterMaxPrice,
} = productListSlice.actions;
export default productListSlice.reducer;
