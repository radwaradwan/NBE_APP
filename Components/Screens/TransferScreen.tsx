import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Transfer from '../Organisms/Transfer';
import TransferOtpScreen from '../Organisms/TransferOtpScreen';
import ModalComponent from '../Atoms/ModalComponent';
import Home from './Home';
const Stack = createNativeStackNavigator();
function TransferScreen() {
    return(
        <>
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
