import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { stations } from './stations/stations';


export const rootReducer = combineReducers({
  [NameSpace.Stations]: stations.reducer,
});
