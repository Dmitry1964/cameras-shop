import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, TPromo } from 'src/shared';
import { fetchPromoList } from '../actions/api-actions';


export type TPromoListState = {
  promoList: TPromo[];
  status: FetchStatus;
}

const initialState: TPromoListState = {
  promoList: [],
  status: FetchStatus.Idle,
};

const promoListSlice = createSlice({
  name: 'promoList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoList.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchPromoList.fulfilled, (state, action) => {
        state.promoList = action.payload;
        state.status = FetchStatus.Fulfilled;
      })

      .addCase(fetchPromoList.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});


export default promoListSlice.reducer;
