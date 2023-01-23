import { View, FlatList } from 'react-native';
import React, { useContext } from 'react';
import { styles } from './ChartScreen.styles';
import Loader from '../../components/loader/Loader';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { MonoText } from '../../components/StyledText';
import { StationsContext } from '../../context/StationsContex';

const ChartScreen = () => {

    const { stations, loading, error } = useContext(StationsContext)

    type ItemProps = {
        name: string;
        address: string;
        num_bikes_available: number;
    };

    const Item = ({ name, address, num_bikes_available }: ItemProps) => (
        <View style={styles.itemView}>
            <MonoText style={styles.title}>{name}</MonoText>
            <View style={styles.addressContainer}><MonoText style={styles.address}>{address}</MonoText>
                <MonoText style={num_bikes_available > 3 ? { color: "#89ce00" } : { color: "#f57600" }}>{`Bikes: ${num_bikes_available}`}</MonoText>
            </View>
        </View>
    );

    if (error) {
        return <ErrorScreen />;
    }
    return (
        <View style={styles.container}>
            <Loader loading={loading} />
            {stations.length > 0 && <FlatList
                data={stations.sort((a: any, b: any) => (a.name > b.name) ? 1 : -1)}
                keyExtractor={(item: any) => item.station_id + item.last_reported}
                renderItem={({ item }) => <Item name={item.name} address={item.address} num_bikes_available={item.num_bikes_available} />}
            />}

        </View>
    )
}

export default ChartScreen