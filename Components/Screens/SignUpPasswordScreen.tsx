import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import SignUpNav from '../Molecules/SignUpNav';
import SignUpText from '../Atoms/SignUpText';
import SignUpInputs from '../Atoms/SignUpInputs';
// import SubmitButton from '../Atoms/SubmitButton';
import PasswordValidation from '../Atoms/PasswordValidation';
function SignUpPasswordScreen(){
    return(
        <KeyboardAvoidingView style={styles.outerContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.innerContainer}>
                <SignUpNav/>
                <SignUpText text1="Set your password" text2="Enter a strong password for your online banking account"/>
                <SignUpInputs placeholder="write your password" title="Password"
                path={require('../../Assets/images/password.png')} type="password"/>
                <SignUpInputs placeholder="Re-Write your password here" title="Confirm Password"
                path={require('../../Assets/images/password.png')} type="password"/>
                <View style={styles.validationContainer}>
                    <View>
                        <PasswordValidation text="Lower case letter"/>
                        <PasswordValidation text="Minimum 8 characters"/>
                        <PasswordValidation text="Special character"/>
                    </View>
                    <View>
                        <PasswordValidation text="Upper case letter"/>
                        <PasswordValidation text="Number"/>
                    </View>
                </View>
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
    validationContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
});

export default SignUpPasswordScreen;
