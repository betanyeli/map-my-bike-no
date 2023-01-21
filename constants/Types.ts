import { LatLng } from "react-native-maps";

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}
export interface Center {
  latitude: number;
  longitude: number;
}

export interface Stations {
  id: string;
  title: string;
  subtitle: string;
  number_of_locks: number;
  center: LatLng;
  bounds: LatLng[];
}

export interface Data {
  stations: Stations[];
}

export interface AvailableStations {
  stations: AvailableStation[];
}

export interface AvailableStation {
  station_id: string;
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  num_bikes_available: number;
  num_docks_available: number;
}
