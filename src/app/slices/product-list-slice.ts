import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, TCamera } from 'src/shared';
import { fetchCamerasList } from '../actions/api-actions';

export type TCamerasList = {
  cameras: TCamera[];
  status: FetchStatus;
}

export const initialState : TCamerasList = {
  cameras: [],
  status: FetchStatus.Idle,
};

const productListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {},
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

export default productListSlice.reducer;
