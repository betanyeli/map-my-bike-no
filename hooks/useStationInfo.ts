import { useState, useEffect } from "react";
import axios from "axios";

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

const useStationInfo = <T>(url: string, initialData: T): [T, boolean, any] => {
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
        const response: ApiResponse<T> = await axios.get(url, config);
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
  }, [url]);

  return [data, loading, error];
};

export default useStationInfo;
