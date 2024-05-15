import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpCongratulationScreen from '../Organisms/SignUpCongratulationScreen';
import SignUpMobileScreen from '../Organisms/SignUpMobileScreen';
import SignUpOtpScreen from '../Organisms/SignUpOtpScreen';
import SignUpPasswordScreen from '../Organisms/SignUpPasswordScreen';
import Home from './Home';
const Stack = createNativeStackNavigator();
function SignUpScreen() {
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name="signupMobile" component={SignUpMobileScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="otp" component={SignUpOtpScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="signupPassword" component={SignUpPasswordScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="signupcongrat" component={SignUpCongratulationScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </>
    );
}

export default SignUpScreen;
