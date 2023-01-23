import { createContext } from "react";
import useMergedStationData from "../hooks/useMergedStationData";

export const StationsContext = createContext<any>(null);

export const StationsProvider = ({ children }: any) => {
    const { stations, error, loading } = useMergedStationData();
    return (
        <StationsContext.Provider value={{ stations, error, loading }}>
            {children}
        </StationsContext.Provider>
    );
};