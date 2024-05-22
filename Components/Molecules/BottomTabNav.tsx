/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native'; // Consolidated imports
import Home from '../Screens/Home';
import Map from '../Screens/Map';
import TransferScreen from '../Screens/TransferScreen';
import AirPay from '../Screens/AirPay';
// import HomeCards from '../Screens/HomeCards';
import Ben from '../Organisms/Ben';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        height: 80,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.container, focused ? { backgroundColor: '#007236' } : { backgroundColor: '#F1F3FB' }]}>
                            <Image
                                source={require('../../Assets/images/home.png')}
                                style={{ tintColor: focused ? '#fff' : 'gray' }}
                            />
                            <Text style={[styles.text,focused ? { color: 'white' } : { color: '#B7B7B7' }]}>Home</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="transferScreen"
                component={TransferScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.container, focused ? { backgroundColor: '#007236' } : { backgroundColor: '#F1F3FB' }]}>
                            <Image
                                source={require('../../Assets/images/transfer.png')}
                                style={{ tintColor: focused ? '#fff' : 'gray' }}
                            />
                            <Text style={[styles.text,focused ? { color: 'white' } : { color: '#B7B7B7' }]}>Transfer</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="ben"
                component={Ben}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.container, focused ? { backgroundColor: '#007236' } : { backgroundColor: '#F1F3FB' }]}>
                            <Image
                                source={require('../../Assets/images/Beneficiaries.png')}
                                style={{ tintColor: focused ? '#fff' : 'gray' }}
                            />
                            <Text style={[styles.text,focused ? { color: 'white' } : { color: '#B7B7B7' }]}>Beneficiaries</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="map"
                component={Map}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.container, focused ? { backgroundColor: '#007236' } : { backgroundColor: '#F1F3FB' }]}>
                            <Image
                                source={require('../../Assets/images/atm.png')}
                                style={{ tintColor: focused ? '#fff' : 'gray' }}
                            />
                            <Text style={[styles.text,focused ? { color: 'white' } : { color: '#B7B7B7' }]}>ATMs</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="airpay"
                component={AirPay}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.container, focused ? { backgroundColor: '#007236' } : { backgroundColor: '#F1F3FB' }]}>
                            <Image
                                source={require('../../Assets/images/airPay.png')}
                                style={{ tintColor: focused ? '#fff' : 'gray' }}
                            />
                            <Text style={[styles.text,focused ? { color: 'white' } : { color: '#B7B7B7' }]}>Air Pay</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: 70,
        height: 70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        marginTop:5,
        fontSize:10,
    },
});

export default BottomTabNavigator;
