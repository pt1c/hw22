import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { StationType } from '../types/station-type';
import { AppDispatch, State } from '../types/state';


export const fetchStationsAction = createAsyncThunk<StationType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetch/stations',
  async (_arg, {dispatch, extra: api}) => (await api.get<StationType[]>(APIRoute.Stations)).data,
);

