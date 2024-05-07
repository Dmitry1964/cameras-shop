import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCamera } from 'src/shared';

type BasketState = {
  basketList: TCamera[];
}

const initialState: BasketState = {
  basketList: [],
};

const basketSlice = createSlice({
  name: 'basketList',
  initialState,
  reducers: {
    addCameraBasket: (state, action: PayloadAction<TCamera>) => {
      state.basketList.push(action.payload);
    },
    removeCameraBasket: (state, action: PayloadAction<TCamera>) => {
      if (state.basketList.length > 0) {
        state.basketList = state.basketList.filter((item) => item.id !== action.payload.id);
      }
    }

  }
});


export const {addCameraBasket, removeCameraBasket} = basketSlice.actions;

export default basketSlice.reducer;
