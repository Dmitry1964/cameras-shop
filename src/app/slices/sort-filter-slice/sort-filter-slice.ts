import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortedOptions, TSortFilter } from 'src/shared';
import { ProductCategory, ProductLevel, ProductType } from 'src/shared/types/app-types';

const initialState: TSortFilter = {
  sortPricePopular: '',
  sortUpDown: '',
  filterCategory: '',
  filterLevel: [],
  filterType: []
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
  sortUpDown
} = SortFilterSlice.actions;
export default SortFilterSlice.reducer;
