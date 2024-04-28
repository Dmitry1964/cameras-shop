import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchStatus, SortedOptions, TCamera, TSortFilter } from 'src/shared';
import { fetchCamerasList } from '../../actions/api-actions';

export type TCamerasListState = {
  cameras: TCamera[];
  filterList: TCamera[];
  status: FetchStatus;
}

export const initialState: TCamerasListState = {
  cameras: [],
  filterList: [],
  status: FetchStatus.Idle,
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
    sortList: (state, action: PayloadAction<TSortFilter>) => {
      if (action.payload.sortPricePopular === SortedOptions.Price) {
        state.filterList = [...state.filterList].sort((a: TCamera, b: TCamera) => b.price - a.price);
      }
      if (action.payload.sortPricePopular === SortedOptions.Popular) {
        state.filterList = [...state.filterList].sort((a: TCamera, b: TCamera) => b.rating - a.rating);
      }
      if (action.payload.sortUpDown === SortedOptions.SortDown) {
        if (action.payload.sortPricePopular === SortedOptions.Price) {
          state.filterList = [...state.filterList].sort((a: TCamera, b: TCamera) => a.price - b.price);
        }
        if (action.payload.sortPricePopular === SortedOptions.Popular) {
          state.filterList = [...state.filterList].sort((a: TCamera, b: TCamera) => a.rating - b.rating);
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


export const { filterCategory, filterType, filterLevel, defaultFilterList, sortList } = productListSlice.actions;
export default productListSlice.reducer;
