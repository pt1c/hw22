import { State } from '../../types/state';
import { StationType } from '../../types/station-type';
import { NameSpace } from '../../const';

export const getStations = (state: State): StationType[] => state[NameSpace.Stations].stations;
export const getIsStationsLoading = (state: State): boolean => state[NameSpace.Stations].isLoading;
