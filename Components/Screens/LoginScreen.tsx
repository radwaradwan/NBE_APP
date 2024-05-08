import React from 'react';
import { ImageBackground,StyleSheet} from 'react-native';
import SubmitButton from '../Atoms/SubmitButton';
import LoginInputs from '../Molecules/LoginInputs';
import LoginNav from '../Molecules/LoginNav';
import HeaderLoginText from '../Atoms/HeaderLoginText';
import RememberMeRow from '../Molecules/RememberMeRow';
function LoginScreen() {
    const backgroundImage = require('../../Assets/images/main.png');
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
            <LoginNav/>
            <HeaderLoginText/>
            <LoginInputs/>
            <RememberMeRow/>
            <SubmitButton title="Log In"/>
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
