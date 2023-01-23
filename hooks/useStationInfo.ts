import { useState, useEffect } from "react";
import axios from "axios";

interface Data {
  data: any;
}

interface ApiResponse<T> {
  data: Data;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}

interface Error {
  message: string;
}

const useStationInfo = <T>(
  url: string,
  initialData: T
): [T | any, boolean, any] => {
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
        const uniqueData: any = [...new Set(response?.data?.data?.stations)];
        setData(uniqueData || initialData);
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
