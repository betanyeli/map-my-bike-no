import { useEffect, useState } from "react";
import { STATIONS } from "../data/Data";
import useStationInfo from "./useStationInfo";

const useMergedStationData = () => {
  const BASE_URL = `https://gbfs.urbansharing.com/oslobysykkel.no/`;

  const defaultData = {
    data: {
      stations: STATIONS /** Just in case first api call failed 😔... */,
    },
  };
  const defaultLt = 59.911316550780164;
  const defaultLn = 10.776308380880522;
  const DEFAULT_COORDINATE = {
    latitude: defaultLt,
    longitude: defaultLn,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };

  const [data, loading, error] = useStationInfo(
    `${BASE_URL}station_information.json`,
    defaultData
  );
  const [stations, setStations] = useState<[]>([]);
  const useStationStatus = useStationInfo(
    `${BASE_URL}station_status.json`,
    defaultData
  );

  useEffect(() => {
    const stationStatus = useStationStatus[0] || defaultData;
    const stationInfo = data || defaultData;

    if (data.length > 0 && stationStatus.length > 0) {
      const mergedStationsInfo = stationInfo.reduce((acc: any, curr: any) => {
        let obj2 = stationStatus.find(
          (y: any) => y.station_id === curr.station_id
        );
        if (obj2) {
          acc.push({ ...curr, ...obj2 });
        }
        return acc;
      }, []);
      setStations(mergedStationsInfo);
    }
  }, [data]);

  return { stations, loading, error, DEFAULT_COORDINATE, defaultLn, defaultLt };
};

export default useMergedStationData;
