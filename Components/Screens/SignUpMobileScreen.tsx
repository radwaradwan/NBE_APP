import React from 'react';
import {StyleSheet,StatusBar,View,Text} from 'react-native';
import SignUpNav from '../Molecules/SignUpNav';
import SignUpText from '../Atoms/SignUpText';
import SignUpInputs from '../Atoms/SignUpInputs';
import SubmitButton from '../Atoms/SubmitButton';
function SignUpMobileScreen() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <StatusBar translucent backgroundColor="transparent" />
                <SignUpNav/>
                <SignUpText text1="Mobile number" text2="Enter the mobile number registred in the bank"/>
                <SignUpInputs placeholder="enter your mobile number" title="Mobile number" path={require('../../Assets/images/mobile.png')} type="mobile number"/>
            </View>
            <View style={styles.innerContainer}>
                <SubmitButton title="Next"/>
                <Text style={styles.text}>By signing up, you agree to our <Text style={styles.boldText}>Terms of Service</Text> and acknowledge that you have read our <Text style={styles.boldText}>Privacy Policy</Text>.</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    outerContainer:{
        backgroundColor:'#F1F3FB',
        justifyContent:'space-between',
        height:780,
    },
    innerContainer:{
        margin:20,
    },
    text:{
        marginBottom:10,
        fontSize:14,
    },
    boldText:{
        fontWeight:'500',
        color:'#000',
    },
});

export default SignUpMobileScreen;
