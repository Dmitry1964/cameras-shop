import { PayloadAction, createSlice } from '@reduxjs/toolkit';


type AddModalState = {
  idCamera: number;
  showModal: boolean;
};

const initialState : AddModalState = {
  idCamera: 1,
  showModal: false,
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
    }
  }
});

export const {openAddModal, closeAddModal} = addModalSlice.actions;
export default addModalSlice.reducer;
