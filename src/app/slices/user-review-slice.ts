import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, TReview } from 'src/shared';
import { fetchUserReview } from '../actions/api-actions';

type TUserReviewState = {
  userReview: TReview;
  status: FetchStatus;
};

const initialState: TUserReviewState = {
  userReview: {
    id: '',
    userName: '',
    advantage: '',
    disadvantage: '',
    cameraId: 1,
    createAt: '',
    rating: 1,
    review: '',
  },
  status: FetchStatus.Idle,
};

const userReviewSlice = createSlice({
  name: 'userReview',
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.status = FetchStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserReview.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchUserReview.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.userReview = action.payload;
      });
  },
});

export const {changeStatus} = userReviewSlice.actions;
export default userReviewSlice.reducer;
