import { createSlice } from '@reduxjs/toolkit';
import { StationState } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchStationsAction } from '../api-actions';


const initialState: StationState = {
  stations: [],
  isLoading: true,
};

export const stations = createSlice({
  name: NameSpace.Stations,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStationsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStationsAction.fulfilled, (state, action) => {
        state.stations = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchStationsAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
