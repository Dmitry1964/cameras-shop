import { PayloadAction, createSlice } from '@reduxjs/toolkit';


type AddModalState = {
  idCamera: number;
  showModal: boolean;
  showAddBasket: boolean;
};

const initialState : AddModalState = {
  idCamera: 1,
  showModal: false,
  showAddBasket: false,
};

const addModalSlice = createSlice({
  name: 'addModal',
  initialState,
  reducers: {
    openAddModal: (state, action: PayloadAction<number>) => {
      state.idCamera = action.payload;
      state.showModal = true;
    },

    closeAddModal: (state) => {
      state.showModal = false;
    },

    openAddBasketModal: (state) => {
      state.showAddBasket = true;
    },
    closeAddBasket: (state) => {
      state.showAddBasket = false;
    }
  }
});

export const {openAddModal, closeAddModal, openAddBasketModal, closeAddBasket} = addModalSlice.actions;
export default addModalSlice.reducer;
