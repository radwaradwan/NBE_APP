import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import TextLogo from '../Atoms/TextLogo';
import BackButton from '../Atoms/BackButton';
// import { useNavigation } from '@react-navigation/native';
type Props = {
    navigation?:any,
    screenName?:string,
};
function SignUpNav(props:Props) {
    const {navigation,screenName} = props;
    const navigateToCustomScreen = () => {
        console.log('hello custom screen');
        navigation.navigate(screenName); // Navigate to 'otp' screen
        console.log('hello2 custom screen');
        console.log('...........................',screenName);
    };
    console.log('...',screenName);
    return (
        <View style={styles.navContainer}>
            <View>
                <BackButton onPress={navigateToCustomScreen}/>
            </View>
            <View style={styles.logoContainer}>
                <TextLogo type="splash"/>
                <Image source={require('../../Assets/images/signupLogo.png')} style={styles.img}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:30,
        marginTop:30,
    },
    logoContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    img:{
        marginStart:5,
    },
});
export default SignUpNav;
