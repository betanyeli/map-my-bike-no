import { useState, useEffect } from "react";
import axios from "axios";
import { LatLng } from "react-native-maps";

export const stationsEndpoint: string =
  "https://oslobysykkel.no/api/v1/stations";
export const availableStationsEndpoint: string =
  " https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json";

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

const useFetch = () => {
  const [stations, setStations] = useState<Stations[]>();
  const [centers, setCenters] = useState([]);
  const [availableStations, setAvailablesStations] =
    useState<AvailableStations[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [errorAvailableStations, setErrorAvailableStations] =
    useState<boolean>(false);

  const getStations = async () => {
    setLoading(true);
    try {
      const response: ApiResponse<T> = await axios.get(stationsEndpoint, {
        headers: {
          "Client-Identifier": "betanyeli-map-my-bike",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setStations(response?.data?.stations);
      const centerParsed = response?.data?.stations
        .flatMap((station: any) => station.bounds)
        .map((item: any) => ({
          latitude: item.latitude,
          longitude: item.longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }));
      setCenters(centerParsed);
    } catch (error: any) {
      setError(true);
    }
    setLoading(false);
  };

  const getAvailableStations = async () => {
    setLoading(true);
    try {
      const response: ApiResponse<T> = await axios.get(
        availableStationsEndpoint,
        {
          headers: {
            "Client-Identifier": "betanyeli-map-my-bike",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      setAvailablesStations(response?.data?.stations);
    } catch (error: any) {
      setErrorAvailableStations(true);
    }
    setLoading(false);
  };

  const DEFAULT_COORDINATE = {
    latitude: 59.911316550780164,
    longitude: 10.776308380880522,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };
  useEffect(() => {
    getStations();
    getAvailableStations();
  }, []);

  return {
    stations,
    availableStations,
    errorAvailableStations,
    loading,
    error,
    centers,
    DEFAULT_COORDINATE,
  };
};

export default useFetch;
