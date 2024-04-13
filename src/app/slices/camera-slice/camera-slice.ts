import { createSlice } from '@reduxjs/toolkit';
import { TCamera } from 'src/shared';
import { FetchStatus } from 'src/shared';
import { ProductCategory, ProductLevel, ProductType } from 'src/shared/types/app-types';
import { fetchCameraData } from '../../actions/api-actions';

type TCameraState = {
  camera: TCamera;
  status: FetchStatus;
}

const initialState : TCameraState = {
  camera: {
    id: 1,
    name: '',
    vendorCode: '',
    type: ProductType.Analog,
    category: ProductCategory.Photo,
    description: '',
    level: ProductLevel.Loser,
    price: 0,
    rating: 1,
    reviewCount: 0,
    previewImg: '',
    previewImg2x: '',
    previewImgWebp: '',
    previewImgWebp2x: '',
  },
  status: FetchStatus.Idle
};

const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCameraData.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchCameraData.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.camera = action.payload;
      })

      .addCase(FetchStatus.Rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});

export default cameraSlice.reducer;
