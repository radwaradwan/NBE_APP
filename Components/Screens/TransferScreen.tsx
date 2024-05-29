import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Transfer from '../Organisms/Transfer';
import TransferOtpScreen from '../Organisms/TransferOtpScreen';
import ModalComponent from '../Atoms/ModalComponent';
import Home from './Home';
import { StatusBar } from 'react-native';
import { getTheme } from '../Storage/mmkv';
const Stack = createNativeStackNavigator();
function TransferScreen() {
    const currentTheme = getTheme(); // Get the current theme
    const isDarkTheme = currentTheme === 'Dark';
    return(
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle={isDarkTheme ? 'light-content' : 'dark-content'}/>
            <Stack.Navigator>
                <Stack.Screen name="transfer" component={Transfer} options={{headerShown:false }}/>
                <Stack.Screen name="transferOTP" component={TransferOtpScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
                <Stack.Screen name="modal" component={ModalComponent} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </>
    );
}

export default TransferScreen;
