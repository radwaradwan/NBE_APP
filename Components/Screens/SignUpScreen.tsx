import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpCongratulationScreen from '../Organisms/SignUpCongratulationScreen';
import SignUpMobileScreen from '../Organisms/SignUpMobileScreen';
import SignUpOtpScreen from '../Organisms/SignUpOtpScreen';
import SignUpPasswordScreen from '../Organisms/SignUpPasswordScreen';
// import Home from './Home';
import { getTheme } from '../Storage/mmkv';
import HomeStack from './HomeStack';
import { StatusBar } from 'react-native';
const Stack = createNativeStackNavigator();
function SignUpScreen() {
    const currentTheme = getTheme(); // Get the current theme
    const isDarkTheme = currentTheme === 'Dark';
    return(
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle={isDarkTheme ? 'light-content' : 'dark-content'}/>
            <Stack.Navigator>
                <Stack.Screen name="signupMobile" component={SignUpMobileScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="otp" component={SignUpOtpScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="signupPassword" component={SignUpPasswordScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="signupcongrat" component={SignUpCongratulationScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="homeStack" component={HomeStack} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </>
    );
}

export default SignUpScreen;
