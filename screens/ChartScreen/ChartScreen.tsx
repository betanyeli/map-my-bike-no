import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './ChartScreen.styles'
import { Dimensions } from "react-native";
import { BarChart } from 'react-native-chart-kit'
import useApi from '../../hooks/useApi';

import { Station, StationStatus } from '../../interfaces/StationStatus';


const ChartScreen = () => {

    const BASE_URL = "https://oslobysykkel.no/api/v1/";

    const [data, loading, error] = useApi<StationStatus>(`${BASE_URL}stations/availability`, {});



    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const _data = {
        labels: ["January", "February", "March", "April", "May", "June", "January", "February", "March", "April", "May", "June", "January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            },
        ]
    };

    if (loading) {
        return <View style={{ flex: 1, backgroundColor: 'pink' }}><Text>Loading...</Text></View>;
    }

    if (error) {
        return <Text>Error</Text>;
    }

    return (
        <View>
            {/* <BarChart
                data={_data}
                width={screenWidth}
                height={250}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                yAxisSuffix=""

            /> */}
            {data?.data?.stations?.map((station: Station) => {
                return <Text key={station?.station_id}>Aki ta</Text>
            })}
        </View>
    )
}

export default ChartScreen