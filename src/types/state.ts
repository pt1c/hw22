import { store } from '../store';
import { StationType } from './station-type';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export type StationState = {
  stations: StationType[];
  isLoading: boolean;
};
