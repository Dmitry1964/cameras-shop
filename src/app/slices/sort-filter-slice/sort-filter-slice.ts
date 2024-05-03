import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortedOptions, TSortFilter } from 'src/shared';
import { ProductCategory, ProductLevel, ProductType } from 'src/shared/types/app-types';

const initialState: TSortFilter = {
  sortPricePopular: '',
  sortUpDown: '',
  filterCategory: '',
  filterLevel: [],
  filterType: [],
  userMinPrice: 0,
  userMaxPrice: 0,
};

const SortFilterSlice = createSlice({
  name: 'sortFilterOptions',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<ProductCategory | string>) => {
      state.filterCategory = action.payload;
    },
    addLevel: (state, action: PayloadAction<ProductLevel>) => {
      state.filterLevel.push(action.payload);
    },
    removeLevel: (state, action: PayloadAction<ProductLevel>) => {
      state.filterLevel = state.filterLevel.filter((item) => item.toLowerCase() !== action.payload.toLowerCase());
    },
    addType: (state, action: PayloadAction<ProductType>) => {
      state.filterType.push(action.payload);
    },
    removeType: (state, action: PayloadAction<ProductType>) => {
      state.filterType = state.filterType.filter((item) => item.toLowerCase() !== action.payload.toLowerCase());
    },
    addMinPrice: (state, action: PayloadAction<number>) => {
      state.userMinPrice = action.payload;
    },
    addMaxPrice: (state, action: PayloadAction<number>) => {
      state.userMaxPrice = action.payload;
    },

    categoryReset: (state) => {
      state.filterCategory = '';
    },
    filtersReset: (state) => {
      state.filterCategory = '';
      state.filterType = [];
      state.filterLevel = [];
    },
    sortPricePopular: (state, action: PayloadAction<SortedOptions | string>) => {
      state.sortPricePopular = action.payload;
    },
    sortUpDown: (state, action: PayloadAction<SortedOptions | string>) => {
      state.sortUpDown = action.payload;
    },
  }
});

export const {
  selectCategory,
  addLevel,
  removeLevel,
  addType,
  removeType,
  categoryReset,
  filtersReset,
  sortPricePopular,
  sortUpDown,
  addMaxPrice,
  addMinPrice,
} = SortFilterSlice.actions;
export default SortFilterSlice.reducer;
