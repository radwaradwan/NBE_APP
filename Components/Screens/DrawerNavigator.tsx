/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import HomeCards from './HomeCards';
import TransferScreen from './TransferScreen';
import CustomDrawerContent from './CustomDrawerContent';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TopNav from '../Molecules/TopNav';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={() => ({
                headerTitle: () => (
                    <View style={styles.header}>
                        <TopNav/>
                    </View>
                ),
                headerRight: () => (
                    <TouchableOpacity style={styles.bellIcon}>
                        <Image source={require('../../Assets/images/bell.png')}/>
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: '#f0f0f0',
                    marginVertical: 10,
                },
                // drawerStyle: {
                //     backgroundColor: '#000', // Change this to your desired background color
                // },
            })}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="HomeCards" component={HomeCards} />
            <Drawer.Screen name="TransferScreen" component={TransferScreen} />
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




