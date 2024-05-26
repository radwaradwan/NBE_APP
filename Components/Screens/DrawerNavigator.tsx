/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import TopNav from '../Molecules/TopNav';
import BottomTabNavigator from '../Molecules/BottomTabNav';
// import TransferScreen from './TransferScreen';
// import AddBen from '../Organisms/AddBen';
// import HomeStack from './HomeStack';
// import SignUpNav from '../Molecules/SignUpNav';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={({ route }) => ({
                headerTitle: () => (
                    <View style={styles.header}>
                        <TopNav title="Good Morning" text="Mina" type="topnav"/>
                        <Text>{route.name}</Text>
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
                    backgroundColor: '#F1F3FB',
                    borderTopEndRadius:40,
                    borderBottomEndRadius:40,
                    width:330,
                },
                // headerShown:false,
                // headerShown: route.name === 'transferScreen',
            })}
        >
            {/* <Drawer.Screen name="homeStack" component={HomeStack} /> */}
            <Drawer.Screen name="bottomNav" component={BottomTabNavigator} />
            {/* <Drawer.Screen name="transferScreen" component={TransferScreen} options={{ headerShown:false }}/> */}
            {/* <Drawer.Screen name="transferScreen" component={TransferScreen} options={{headerStyle: {display:'none'},headerShown:false}}/> */}
            {/* <Drawer.Screen name="airpay" component={AirPay} options={{headerShown:true}}/> */}
            {/* <Drawer.Screen
                name="transferScreen"
                component={TransferScreen}
                options={{
                    drawerLabel: () => null, // Hide from the drawer menu
                }}
            />
            <Drawer.Screen
                name="addBen"
                component={AddBen}
                options={{
                    drawerLabel: () => null, // Hide from the drawer menu
                }}
            /> */}

{/* <Drawer.Screen
        name="transferScreen"
        component={TransferScreen}
        options={{
            headerTitle:()=> (<SignUpNav/>),
        }}/> */}
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




