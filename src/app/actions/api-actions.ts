import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiActions, FetchRoutes, TCamera, TPromo } from 'src/shared';


export const fetchCamerasList = createAsyncThunk<TCamera[], void, {extra: AxiosInstance}>(ApiActions.DataFetchCamerasList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TCamera[]>(FetchRoutes.Catalog);
  return data;
});

export const fetchPromoList = createAsyncThunk<TPromo[], void, {extra: AxiosInstance}>(ApiActions.DataFetchPromoList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TPromo[]>(FetchRoutes.Promo);
  return data;
});
