import { View, Text, Button, } from 'react-native'
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react'
import { styles } from './ErrorScreen.styles'
import { MonoText } from '../../components/StyledText';
import { useNavigation } from '@react-navigation/native';


const ErrorScreen = () => {
    const animation = useRef(null);
    const navigation = useNavigation()
    const errorTitleMessage = "Oops😔! \n This feature is not available... yet :D"
    const errorSubtitleMessage = "Check back later for new updates 😉"

    return (
        <View style={styles.container}>
            <View>
                <MonoText style={styles.title}>{errorTitleMessage}</MonoText>
                <MonoText style={styles.subtitle}>{errorSubtitleMessage}</MonoText>
            </View>

            <LottieView
                autoPlay
                ref={animation}
                source={require('../../assets/lottie/error-bike.json')}
                style={styles.lottie}
            />


            <Button title='Go back' accessibilityLabel='Go to previous page' color="#0073E6" onPress={() => navigation.goBack()} />

        </View>
    )
}

export default ErrorScreen