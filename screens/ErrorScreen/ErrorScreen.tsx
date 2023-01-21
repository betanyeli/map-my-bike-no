import { View, Text, Button, } from 'react-native'
import LottieView from 'lottie-react-native';
import React, { useRef } from 'react'
import { styles } from './ErrorScreen.styles'
import { MonoText } from '../../components/StyledText';


const ErrorScreen = () => {
    const animation = useRef(null);
    const errorTitleMessage = "Oops😔! \n Looks like something went wrong"
    const errorSubtitleMessage = "Please, try again or check back later for new updates 😉"

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


            <Button title='Go back' accessibilityLabel='Go to previous page' color="#0073E6" />

        </View>
    )
}

export default ErrorScreen