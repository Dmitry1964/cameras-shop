import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortedOptions, TSortFilter } from 'src/shared';
import { ProductCategory, ProductLevel, ProductType } from 'src/shared/types/app-types';

const initialState: TSortFilter = {
  sortPricePopular: SortedOptions.Price,
  sortUpDown: SortedOptions.SortUp,
  filterCategory: '',
  filterLevel: '',
  filterType: ''
};

const SortFilterSlice = createSlice({
  name: 'sortFilterOptions',
  initialState,
  reducers: {
    filterCategory: (state, action: PayloadAction<ProductCategory | string>) => {
      state.filterCategory = action.payload;
    },
    filterLevel: (state, action: PayloadAction<ProductLevel | string>) => {
      state.filterLevel = action.payload;
    },
    flterType: (state, action: PayloadAction<ProductType | string>) => {
      state.filterType = action.payload;
    },
    filterReset: (state) => {
      state.filterCategory = '';
      state.filterLevel = '';
      state.filterType = '';
    }
  }
});

export const {filterCategory, filterLevel, flterType, filterReset} = SortFilterSlice.actions;
export default SortFilterSlice.reducer;
