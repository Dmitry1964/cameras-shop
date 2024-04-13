import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, TCamera } from 'src/shared';
import { fetchSimilarList } from '../../actions/api-actions';

type TSimilarListState = {
  similarList: TCamera[];
  status: FetchStatus;
};

const initialState : TSimilarListState = {
  similarList: [],
  status: FetchStatus.Idle,
};

const similarListSlice = createSlice({
  name: 'similarList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSimilarList.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchSimilarList.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.similarList = action.payload;
      })

      .addCase(fetchSimilarList.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});


export default similarListSlice.reducer;
