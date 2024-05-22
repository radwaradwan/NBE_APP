import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '../Molecules/BottomTabNav';
import HomeCards from '../Screens/HomeCards';
import AirPay from './AirPay';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="homeCards" component={HomeCards} options={{ headerShown: false }} />
            <Stack.Screen name="airpay" component={AirPay} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
