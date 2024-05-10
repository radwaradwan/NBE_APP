import React from 'react';
import { ImageBackground,StyleSheet,StatusBar} from 'react-native';
import Login from '../Organisms/Login';
function LoginScreen() {
    const backgroundImage = require('../../Assets/images/main.png');
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
            <StatusBar translucent backgroundColor="transparent" />
            <Login/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        paddingVertical:20,
        height:900,
    },
});

export default LoginScreen;
