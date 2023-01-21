import MapView, { Marker } from 'react-native-maps';
import Loader from '../../components/loader/Loader';
import { View } from '../../components/Themed';
import useStationInfo from '../../hooks/useStationInfo';
import { RootTabScreenProps } from '../../types';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { styles } from './HomeScreen.styles';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const { DEFAULT_COORDINATE, centers, loading, error } = useStationInfo()
    if (error) {
        return <ErrorScreen />;
    }

    return (
        <View style={styles.container}>
            <Loader loading={loading} />
            <MapView style={styles.map}
                initialRegion={DEFAULT_COORDINATE}>
                {centers.length ? centers.map(({ latitude, longitude }) => {
                    return <Marker
                        key={`Custom Key ${latitude} ${Math.random()}`}
                        coordinate={{ latitude, longitude }}
                        image={require('../../assets/images/bike-available.png')}
                    />
                }) : null}
            </MapView>
        </View>
    );
}

