import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = `https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json`;

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}

interface Error {
  message: string;
}

const useStationAvailability = <T>(initialData: T): [T, boolean, any] => {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const config = {
    headers: {
      "Client-Identifier": "betanyeli-map-my-bike",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: ApiResponse<T> = await axios.get(BASE_URL, config);
        setData(response?.data || initialData);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError({ message: err.message });
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData().then((response) => response);
  }, []);

  return [data, loading, error];
};

export default useStationAvailability;
