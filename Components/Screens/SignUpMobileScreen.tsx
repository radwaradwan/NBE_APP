import React from 'react';
import {StyleSheet,StatusBar,View,Text,KeyboardAvoidingView, Platform} from 'react-native';
import SignUpAbovePart from '../Organisms/SignUpAbovePart';
import SignUpInputs from '../Atoms/SignUpInputs';
import SubmitButton from '../Atoms/SubmitButton';
function SignUpMobileScreen() {
    return (
        <KeyboardAvoidingView style={styles.outerContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.innerContainer}>
                <StatusBar translucent backgroundColor="transparent" />
                <SignUpAbovePart/>
                <SignUpInputs placeholder="enter your mobile number" title="Mobile number" path={require('../../Assets/images/mobile.png')} type="mobile number"/>
            </View>
            <View style={styles.innerContainer}>
                <SubmitButton title="Next"/>
                <Text style={styles.text}>By signing up, you agree to our <Text style={styles.boldText}>Terms of Service</Text> and acknowledge that you have read our <Text style={styles.boldText}>Privacy Policy</Text>.</Text>
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
