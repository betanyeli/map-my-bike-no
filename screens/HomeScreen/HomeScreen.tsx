import { useContext } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Loader from '../../components/loader/Loader';
import { View } from '../../components/Themed';
import { StationsContext } from '../../context/StationsContex';
import useMergedStationData from '../../hooks/useMergedStationData';
import { RootTabScreenProps } from '../../types';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { styles } from './HomeScreen.styles';



export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const { DEFAULT_COORDINATE, defaultLn, defaultLt } = useMergedStationData()
    const { stations, loading, error, } = useContext(StationsContext)

    if (error) {
        return <ErrorScreen />;
    }

    return (
        <View style={styles.container}>
            <Loader loading={loading} />
            <MapView style={styles.map}
                initialRegion={DEFAULT_COORDINATE}
                showsUserLocation
            >
                {stations.length > 0 ? stations.map(({ lat, lon, name, num_bikes_available }: any) => {
                    return <Marker
                        title={name || 'Not found'}
                        description={`Bikes availables: ${num_bikes_available || 0}`}
                        key={`Custom Key ${lat} ${Math.random()}`}
                        coordinate={{ latitude: lat || defaultLt, longitude: lon || defaultLn }}
                        image={num_bikes_available !== 0 ? require('../../assets/images/bike-available.png') : require('../../assets/images/bike-unavailable.png')}
                    />
                }) : null}
            </MapView>

        </View>
    );
}

