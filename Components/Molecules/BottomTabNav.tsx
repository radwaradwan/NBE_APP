import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Transfer from '../Organisms/Transfer';
import Map from '../Screens/Map';
import BottomTabIcon from '../Atoms/BottomTabIcon'; // Import your BottomTabIcon component

const Tab = createBottomTabNavigator();

function BottomTabNav() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
            let iconPath;
            if (route.name === 'Home') {
                iconPath = focused
                ? require('../assets/home-icon-focused.png') // Replace with your focused icon path
                : require('../assets/home-icon.png'); // Replace with your unfocused icon path
            } 
            else if (route.name === 'transfer') {
                iconPath = focused
                ? require('../assets/transfer-icon-focused.png') // Replace with your focused icon path
                : require('../assets/transfer-icon.png'); // Replace with your unfocused icon path
            } 
            else if (route.name === 'map') {
                iconPath = focused
                ? require('../assets/map-icon-focused.png') // Replace with your focused icon path
                : require('../assets/map-icon.png'); // Replace with your unfocused icon path
            }

            return <BottomTabIcon text={route.name} path={iconPath} />;
            },
        })}
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="transfer" component={Transfer} />
        <Tab.Screen name="map" component={Map} />
        </Tab.Navigator>
    );
}

export default BottomTabNav;
