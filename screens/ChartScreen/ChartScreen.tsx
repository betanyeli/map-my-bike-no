import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './ChartScreen.styles'
import useStationAvailability from '../../hooks/useStationAvailability';
import { Station } from '../../interfaces/StationStatus';
import Loader from '../../components/loader/Loader';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { MonoText } from '../../components/StyledText';



const ChartScreen = () => {

    const [data, loading, error] = useStationAvailability(`https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json`, {
        data: {
            stations: [{
            }]
        }
    });
    const [stations, setStations] = useState<Station[]>([])

    useEffect(() => {
        if (data?.data?.stations) {
            const uniqueStations: any = [...new Set(data?.data?.stations)]
            setStations(uniqueStations)
        }
    }, [data])

    type ItemProps = { title: string };

    const Item = ({ title }: ItemProps) => (
        <View style={{
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        }}>
            <MonoText>{title}</MonoText>
        </View>
    );



    if (error) {
        return <ErrorScreen />;
    }
    return (
        <View style={styles.container}>
            <Loader loading={loading} />
            <FlatList
                data={stations}
                keyExtractor={item => item.station_id + item.last_reported}
                renderItem={({ item }) => <Item title={item.station_id} />}
            />
        </View>
    )
}

export default ChartScreen