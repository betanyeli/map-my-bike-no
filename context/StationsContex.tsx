import { createContext, useEffect, useState } from "react";
import useMergedStationData from "../hooks/useMergedStationData";

export const StationsContext = createContext<any>(null);

export const StationsProvider = ({ children }: any) => {
    const { stations, error, loading } = useMergedStationData();
    const [, setIsLoaded] = useState(false);

    // TO- DO Workaround, initial data is not loading, Refactor this fn e.e

    useEffect(() => {
        if (stations.length > 0) {
            setIsLoaded(true)
        }
    }, [])

    return (
        <StationsContext.Provider value={{ stations, error, loading }}>
            {children}
        </StationsContext.Provider>
    );
};