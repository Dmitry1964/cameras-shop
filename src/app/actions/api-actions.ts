import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiActions, FetchRoutes, TCamera, TPromo, TReview } from 'src/shared';


export const fetchCamerasList = createAsyncThunk<TCamera[], void, {extra: AxiosInstance}>(ApiActions.DataFetchCamerasList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TCamera[]>(FetchRoutes.Catalog);
  return data;
});

export const fetchPromoList = createAsyncThunk<TPromo[], void, {extra: AxiosInstance}>(ApiActions.DataFetchPromoList, async(_arg, {extra: api}) => {
  const {data} = await api.get<TPromo[]>(FetchRoutes.Promo);
  return data;
});

export const fetchCameraData = createAsyncThunk<TCamera, number, {extra: AxiosInstance}>(ApiActions.DataFetchCamera, async(idCamera, {extra: api}) => {
  const {data} = await api.get <TCamera>(`${FetchRoutes.Camera}/${idCamera}`);
  return data;
});

export const fetchSimilarList = createAsyncThunk<TCamera[], number, {extra: AxiosInstance}>(ApiActions.DataFetchSimilarList, async(idCamera, {extra: api}) => {
  const {data} = await api.get<TCamera[]>(`${FetchRoutes.Camera}/${idCamera}${FetchRoutes.Similar}`);
  return data;
});

export const fetchReviewsList = createAsyncThunk<TReview[], number, {extra: AxiosInstance}>(ApiActions.DataFetchReviewsList, async(idCamera, {extra: api}) => {
  const {data} = await api.get<TReview[]>(`${FetchRoutes.Camera}/${idCamera}${FetchRoutes.Reviews}`);
  return data;
});
