import React from 'react';
import {View,Text} from 'react-native';
import OTPTimer from '../Atoms/OTPTimer';

function ResendOtp(){
    return(
        <View>
            <Text>Didn&#39;t receive the code?</Text>
            <OTPTimer/>
        </View>
    );
}
export default ResendOtp();
