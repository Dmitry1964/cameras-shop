import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiActions, FetchRoutes, TCamera } from 'src/shared';


export const fetchCamerasList = createAsyncThunk<TCamera[], void, {extra: AxiosInstance}>(ApiActions.DataFetchCamerasList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TCamera[]>(FetchRoutes.Catalog);
  return data;
})
