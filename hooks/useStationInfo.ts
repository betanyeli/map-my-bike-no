import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Stations } from "../constants/Types";

export const BASE_URL = "https://oslobysykkel.no/api/v1/";

const useStationInfo = () => {
  const [stations, setStations] = useState<Stations[]>();
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const DEFAULT_COORDINATE = {
    latitude: 59.911316550780164,
    longitude: 10.776308380880522,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };

  useEffect(() => {
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
        setLoading(false);
      } catch (error: any) {
        setError(true);
      }
      setLoading(false);
    };
    getStations().then((response) => response);
  }, []);

  return {
    stations,
    loading,
    error,
    centers,
    DEFAULT_COORDINATE,
  };
};

export default useStationInfo;
