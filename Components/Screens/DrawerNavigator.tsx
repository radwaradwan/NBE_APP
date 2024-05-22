/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './Home';
// import HomeCards from './HomeCards';
// import TransferScreen from './TransferScreen';
import CustomDrawerContent from './CustomDrawerContent';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TopNav from '../Molecules/TopNav';
// import BottomTabNavigator from '../Molecules/BottomTabNav';
import MainStackNavigator from './MainStackNavigator';
// import AirPay from './AirPay';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={() => ({
                headerTitle: () => (
                    <View style={styles.header}>
                        <TopNav title="Good Morning" text="Mina" type="topnav"/>
                    </View>
                ),
                headerRight: () => (
                    <TouchableOpacity style={styles.bellIcon}>
                        <Image source={require('../../Assets/images/bell.png')}/>
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: '#F1F3FB',
                },
                drawerStyle: {
                    backgroundColor: '#F1F3FB', // Change this to your desired background color
                    borderTopEndRadius:40,
                    borderBottomEndRadius:40,
                    width:330,
                },
            })}
        >
            <Drawer.Screen name="MainStack" component={MainStackNavigator} />
            {/* <Drawer.Screen name="HomeCards" component={HomeCards} />
            <Drawer.Screen name="TransferScreen" component={TransferScreen} />
            <Drawer.Screen name="airpay" component={AirPay} /> */}
            {/* Add more screens to the drawer as needed */}
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    header:{
        // marginTop:15,
    },
    bellIcon: {
        marginRight: 20,
        // marginTop:15,
    },
});

export default DrawerNavigator;




