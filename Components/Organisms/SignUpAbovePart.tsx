import React from 'react';
import {View} from 'react-native';
import SignUpNav from '../Molecules/SignUpNav';
import SignUpText from '../Atoms/SignUpText';
function SignUpAbovePart() {
    return (
        <View>
            <SignUpNav/>
            <SignUpText text1="Mobile number" text2="Enter the mobile number registred in the bank"/>
        </View>
    );
}

export default SignUpAbovePart;
