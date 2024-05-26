/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React, { useEffect ,useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native'; // Consolidated imports
import Map from '../Screens/Map';
import TransferScreen from '../Screens/TransferScreen';
import AirPay from '../Screens/AirPay';
// import HomeCards from '../Screens/HomeCards';
// import Ben from '../Organisms/Ben';
import BenScreen from '../Screens/BenScreen';
import HomeStack from '../Screens/HomeStack';
import { useNavigation } from '@react-navigation/native';

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

type BottomTabNavigatorProps = {
    onTabChange?: (screenName: string | undefined) => void | undefined;
};


const BottomTabNavigator = (props:BottomTabNavigatorProps) => {
    const {onTabChange} = props;
    const [routeName,setRouteName] = useState<string | undefined>('');
    const navigation = useNavigation();
    useEffect(()=>{
        const unsubscribe = navigation.addListener('state', () => {
        // if there is paths in bottom nav (true or false)
        const stackNavigatorState = navigation.getState()?.routes.find((route: { name: string; }) => route.name === 'bottomNav')?.state;
        console.log('....',stackNavigatorState);
        const currentRoute = stackNavigatorState?.routes.find(
        (    route: { name: string; }) => route.name === 'benScreen',
    )?.state;
    console.log('.....................',currentRoute);
    console.log('..........hello',currentRoute?.routes[2]);
    console.log('..........helloaaaaaaaaaaaaa',currentRoute?.routeNames?.at(2));
    console.log('benscreeeeeeeeeeeeeeeen',stackNavigatorState?.routes[2].name);

    if (stackNavigatorState?.routes[2].name === 'benScreen' && currentRoute?.routeNames?.at(2) === 'AddBen')
    {
        setRouteName(currentRoute?.routeNames?.at(2));
    }
    });
return unsubscribe;
});



    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="homeStack"
                component={HomeStack}
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
                listeners={({ route }) => ({
                    focus: () => onTabChange && onTabChange(route.name),
                })}
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
                listeners={({ route }) => ({
                    focus: () => onTabChange && onTabChange(route.name),
                })}
            />
            <Tab.Screen
                name="benScreen"
                component={BenScreen}
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
                listeners={({ route }) => ({
                    focus: () => routeName === ' ' && onTabChange ? onTabChange(route.name) : onTabChange!(routeName),
                })}
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
                listeners={({ route }) => ({
                    focus: () => onTabChange && onTabChange(route.name),
                })}
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
                listeners={({ route }) => ({
                    focus: () => onTabChange && onTabChange(route.name),
                })}
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
