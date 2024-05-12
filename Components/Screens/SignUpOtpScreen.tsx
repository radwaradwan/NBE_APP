import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View,Text} from 'react-native';
// import SignUpNav from '../Molecules/SignUpNav';
import SignUpText from '../Atoms/SignUpText';
import OTP from '../Atoms/OTP';
import OTPTimer from '../Atoms/OTPTimer';
// import SubmitButton from '../Atoms/SubmitButton';
function SignUpOtpScreen(){
    return(
        <KeyboardAvoidingView style={styles.outerContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.innerContainer}>
                {/* <SignUpNav/> */}
                <SignUpText text1="Verification" text2="Enter 5 digit code we sent to +20 101 131 5412"/>
                <OTP/>
                <Text>Didn&#39;t receive the code?</Text>
                <OTPTimer/>
            </View>
            <View style={styles.innerContainer}>
                {/* <SubmitButton title="Submit"/> */}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    outerContainer:{
        backgroundColor:'#F1F3FB',
        justifyContent:'space-between',
        height:'100%',
    },
    innerContainer:{
        margin:20,
    },
});
export default SignUpOtpScreen;

