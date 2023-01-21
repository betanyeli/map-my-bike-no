import React, { useRef } from 'react'
import { styles } from './Loader.styles'
import LottieView from 'lottie-react-native';

type LoaderProps = {
    loading: boolean
}

const Loader = ({ loading }: LoaderProps) => {
    const animation = useRef(null);
    return (
        loading ? <LottieView
            autoPlay
            ref={animation}
            style={styles.lottie}
            source={require('../../assets/lottie/loader-bike.json')}
        /> : null
    )
}

export default Loader