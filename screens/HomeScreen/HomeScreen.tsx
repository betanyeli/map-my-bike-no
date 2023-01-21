import MapView, { Marker } from 'react-native-maps';
import { View } from '../../components/Themed';
import useFetch from '../../hooks/useFetch';
import { RootTabScreenProps } from '../../types';
import { styles } from './HomeScreen.styles';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const { DEFAULT_COORDINATE, centers } = useFetch()


    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={DEFAULT_COORDINATE}>
                {centers.map(({ latitude, longitude }) => {
                    return <Marker
                        key={`Custom Key ${latitude} ${Math.random()}`}
                        coordinate={{ latitude, longitude }}
                        image={require('../../assets/images/bike-available.png')}
                    />
                })}
            </MapView>
        </View>
    );
}

