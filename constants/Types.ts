export interface Center {
  latitude: number;
  longitude: number;
}

export interface Stations {
  id: string;
  title: string;
  subtitle: string;
  number_of_locks: number;
  center: Center;
  bounds: Center[];
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
