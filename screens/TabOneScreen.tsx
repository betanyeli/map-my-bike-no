import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { View } from '../components/Themed';
import useFetch from '../hooks/useFetch';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { DEFAULT_COORDINATE, centers } = useFetch()

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={DEFAULT_COORDINATE}>
        {centers.map(({ latitude, longitude }) => {
          return <Marker
            key={`Custom Key ${latitude} ${Math.random()}`}
            coordinate={{ latitude, longitude }}
            image={{ uri: "https://i.ibb.co/DRxz9KC/pin-png-39463.png" }}
          />
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
