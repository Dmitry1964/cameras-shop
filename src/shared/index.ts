import { AppRoutes, FetchRoutes } from './routes/routes';
import { TCamera, FetchStatus, TPromo, TReview } from './types/app-types';
import { BACKEND_URL, TIME_OUT, ApiActions, stars, TOTAL_CARD, DEFAULT_START, DEFAULT_END, OPTIONS, DESCRIPTION} from './constants/constants';
import { createAPI } from './api/api';
import { getArrNumbers, getIndex } from './service/service';

export {
  AppRoutes,
  FetchRoutes,
  BACKEND_URL,
  TIME_OUT,
  createAPI,
  FetchStatus,
  ApiActions,
  stars,
  TOTAL_CARD,
  getArrNumbers,
  DEFAULT_START,
  DEFAULT_END,
  getIndex,
  OPTIONS,
  DESCRIPTION,
};

export type {TCamera, TPromo, TReview};

