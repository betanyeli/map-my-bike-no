import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Loader from '../../components/loader/Loader';
import { View } from '../../components/Themed';
import useStationInfo from '../../hooks/useStationInfo';
import { RootTabScreenProps } from '../../types';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { styles } from './HomeScreen.styles';

// to do - Move this to helper or constant

const defaultLt = 59.911316550780164
const defaultLn = 10.776308380880522
const DEFAULT_COORDINATE = {
    latitude: defaultLt,
    longitude: defaultLn,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
};
const BASE_URL = `https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json`;


export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const [data, loading, error] = useStationInfo(BASE_URL, {
        data: {
            stations: [{
            }]
        }
    });

    const [stations, setStations] = useState<[]>([])

    useEffect(() => {
        if (data?.data?.stations) {
            const uniqueStations: any = [...new Set(data?.data?.stations)]
            setStations(uniqueStations)
            navigation.setParams({ stations: uniqueStations?.length as never } as never)
        }
    }, [data])

    if (error) {
        return <ErrorScreen />;
    }


    return (
        <View style={styles.container}>
            <Loader loading={loading} />
            <MapView style={styles.map}
                initialRegion={DEFAULT_COORDINATE}
                showsUserLocation>
                {stations.length > 0 ? stations.map(({ lat, lon, capacity, name, }) => {
                    return <Marker
                        title={name || 'Not found'}
                        description={`Capacity: ${capacity || 0}`}
                        key={`Custom Key ${lat} ${Math.random()}`}
                        coordinate={{ latitude: lat || defaultLt, longitude: lon || defaultLn }}
                        image={require('../../assets/images/bike-available.png')}
                    />
                }) : null}
            </MapView>
        </View>
    );
}

