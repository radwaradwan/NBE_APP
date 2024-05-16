
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text } from 'react-native'; // Import Text component
import Home from '../Screens/Home';
import Map from '../Screens/Map';
import TransferScreen from '../Screens/TransferScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="map" component={Map} options={{ headerShown: false }}/>
        <Tab.Screen name="transferScreen" component={TransferScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
