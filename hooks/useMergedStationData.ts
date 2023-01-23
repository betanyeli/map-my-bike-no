import { useEffect, useState } from "react";
import useStationInfo from "./useStationInfo";

const useMergedStationData = () => {
  const BASE_URL = `https://gbfs.urbansharing.com/oslobysykkel.no/`;

  const defaultData = {
    data: {
      stations: [
        {
          address: "Økernveien 147",
          capacity: 12,
          is_installed: 1,
          is_renting: 1,
          is_returning: 1,
          last_reported: 1674436452,
          lat: 59.911316550780164,
          lon: 10.776308380880522,
          name: "Default while data is loading",
          num_bikes_available: 1,
          num_docks_available: 11,
          rental_uris: {
            android: "oslobysykkel://stations/2355",
            ios: "oslobysykkel://stations/2355",
          },
          station_id: "2355",
        },
      ],
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
