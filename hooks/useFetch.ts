import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { AvailableStations, Stations } from "../constants/Types";

export const BASE_URL = "https://oslobysykkel.no/api/v1/";

const useFetch = () => {
  const [stations, setStations] = useState<Stations[]>();
  const [centers, setCenters] = useState([]);
  const [availableStations, setAvailablesStations] =
    useState<AvailableStations[]>();
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [errorAvailableStations, setErrorAvailableStations] =
    useState<boolean>(false);

  const getStations = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse = await axios.get(`${BASE_URL}stations`, {
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

  const getStationStatus = async () => {
    setLoadingStatus(true);
    try {
      const response: AxiosResponse = await axios.get(
        `${BASE_URL}station_status.json`,
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
    setLoadingStatus(false);
  };

  const DEFAULT_COORDINATE = {
    latitude: 59.911316550780164,
    longitude: 10.776308380880522,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };

  useEffect(() => {
    getStations();
    getStationStatus();
  }, []);

  return {
    stations,
    availableStations,
    errorAvailableStations,
    loading,
    error,
    centers,
    DEFAULT_COORDINATE,
    getStations,
    loadingStatus,
  };
};

export default useFetch;
