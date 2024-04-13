import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, TReview } from 'src/shared';
import { fetchReviewsList } from '../../actions/api-actions';

type ReviewsListState = {
  reviewsList: TReview[];
  status: FetchStatus;
};

const initialState: ReviewsListState = {
  reviewsList: [],
  status: FetchStatus.Idle,
};

const reviewsListSlice = createSlice({
  name: 'reviewsList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsList.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchReviewsList.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.reviewsList = action.payload;
      })

      .addCase(fetchReviewsList.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});


export default reviewsListSlice.reducer;
