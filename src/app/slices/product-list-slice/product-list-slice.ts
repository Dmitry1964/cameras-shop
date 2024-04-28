import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FetchStatus, TCamera, TSortFilter } from 'src/shared';
import { fetchCamerasList } from '../../actions/api-actions';

export type TCamerasListState = {
  cameras: TCamera[];
  filterList: TCamera[];
  status: FetchStatus;
}

export const initialState : TCamerasListState = {
  cameras: [],
  filterList: [],
  status: FetchStatus.Idle,
};

const productListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    getFilterList: (state, action: PayloadAction<TSortFilter>) => {
      if (action.payload.filterCategory) {
        state.filterList = state.cameras.filter((item) => item.category === action.payload.filterCategory);
      } else {
        state.filterList = state.cameras;
      }
    },
    defaultFilterList: (state, action: PayloadAction<TCamera[]>) => {
      state.filterList = action.payload;
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


export const {getFilterList, defaultFilterList} = productListSlice.actions;
export default productListSlice.reducer;
