import React from 'react';
import { ImageBackground,StyleSheet} from 'react-native';
import SubmitButton from '../Atoms/SubmitButton';
import UserInput from '../Atoms/UserInput';

function LoginScreen() {
    const atImg = require('../../Assets/images/user.png');
    const backgroundImage = require('../../Assets/images/main.png');
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
            <UserInput placeholder="username" title="Username" path={atImg}/>
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
