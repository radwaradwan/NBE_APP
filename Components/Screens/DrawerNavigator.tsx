/* eslint-disable react/no-unstable-nested-components */
import React, {  useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import TopNav from '../Molecules/TopNav';
import BottomTabNavigator from '../Molecules/BottomTabNav';
import { theme } from '../theme/theme';
// import TransferScreen from './TransferScreen';
// import AddBen from '../Organisms/AddBen';
// import HomeStack from './HomeStack';
// import SignUpNav from '../Molecules/SignUpNav';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    const handleScreenChange = (screenName: string | undefined) => {
        console.log('screen',screenName);
        if (screenName === 'AddBen' || screenName === 'transferScreen') {
            setIsHeaderHidden(true);
            console.log('123');
        } else {
            setIsHeaderHidden(false);
        }
        console.log('header123',isHeaderHidden);
    };

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: !isHeaderHidden,
                headerTitle: () => (
                    <View style={styles.header}>
                        <TopNav type="topnav"/>
                        {/* <Text>{currentScreen}</Text> */}
                    </View>
                ),
                headerRight: () => (
                    <TouchableOpacity style={styles.bellIcon}>
                        <Image source={require('../../Assets/images/bell.png')}/>
                    </TouchableOpacity>
                ),
                headerStyle: {
                    // backgroundColor: '#F1F3FB',
                    backgroundColor:theme.BackgroundScreen,
                },
                drawerStyle: {
                    backgroundColor:theme.BackgroundScreen,
                    borderTopEndRadius:40,
                    borderBottomEndRadius:40,
                    width:330,
                },
                headerTintColor: theme.textColor,
                // headerShown:false,
                // headerShown: route.name === 'transferScreen',
            }}
        >
            <Drawer.Screen name="bottomNav">
                {props => <BottomTabNavigator {...props} onTabChange={handleScreenChange} />}
            </Drawer.Screen>

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




