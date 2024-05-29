/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
// import React from 'react';
import { View, StyleSheet, Image, Text, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import TextLogo from '../Atoms/TextLogo';
import ArabicIcon from '../Atoms/ArabicIcon';
import TopNav from '../Molecules/TopNav';
import Icon from '../Atoms/Icon';
import RNRestart from 'react-native-restart';
import {theme} from '../theme/theme';
import { GetTheme } from '../theme/themes';
import { setTheme } from '../Storage/mmkv';

type Props = {
    navigation: any,
    state: any,
    descriptors: any,
};

function CustomDrawerContent(props: Props) {
    const [isDarkMode, setIsDarkMode] = useState(theme);

    const setSelectedTheme = () => {
        RNRestart.restart();
    };

    const toggleDarkMode = () => {
        const newTheme = isDarkMode.name === 'Dark' ? 'Light' : 'Dark';
        setIsDarkMode(GetTheme(newTheme));
        setTheme(newTheme);
    };

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
            <View style={styles.container}>
                <View style={styles.outerLogoContainer}>
                    <View style={styles.logoContainer}>
                        <TextLogo type="splash" />
                        <Image source={require('../../Assets/images/signupLogo.png')} style={styles.img} />
                    </View>
                    <View style={styles.icon}>
                        <ArabicIcon />
                    </View>
                </View>
                <View>
                    <DrawerItem label="Account Summary"  icon={() => <Icon path={require('../../Assets/images/accSum.png')} />} style={styles.label} onPress={() => {}} labelStyle={styles.text} pressColor="#007236" />
                    <DrawerItem label="Open Certificates & Deposits" icon={() => <Icon path={require('../../Assets/images/deposit.png')} />} style={styles.label} onPress={() => {}} labelStyle={styles.text} pressColor="#007236" />
                    <DrawerItem label="Payment Services" icon={() => <Icon path={require('../../Assets/images/payment.png')} />} style={styles.label} onPress={() => {}} labelStyle={styles.text} pressColor="#007236" />
                    <DrawerItem label="Cards Services" icon={() => <Icon path={require('../../Assets/images/cardservice.png')} />} style={styles.label} onPress={() => {}} labelStyle={styles.text} pressColor="#007236" />
                    <DrawerItem label="Hard Token" icon={() => <Icon path={require('../../Assets/images/token.png')} />} style={styles.label} onPress={() => {}} labelStyle={styles.text} pressColor="#007236" />
                    <DrawerItem label="Offers" icon={() => <Icon path={require('../../Assets/images/offers.png')} />} style={styles.label} onPress={() => {}} labelStyle={styles.text} pressColor="#007236" />
                    <DrawerItem label="Customer Services" icon={() => <Icon path={require('../../Assets/images/custservice.png')} />} style={styles.label} onPress={() => {}} labelStyle={styles.text} pressColor="#007236" />
                    <DrawerItem label="Calculators" icon={() => <Icon path={require('../../Assets/images/calc.png')} />} style={styles.label} onPress={() => {}} labelStyle={styles.text} pressColor="#007236" />
                    <View style={styles.darkModeContainer}>
                        <View style={styles.darkModeInnerContainer}>
                            <Icon path={require('../../Assets/images/dark.png')}/>
                            <Text style={[styles.text,{marginLeft:13}]}>Dark Mode</Text>
                        </View>
                        <Switch
                            value={isDarkMode.name === 'Dark'}
                            onValueChange={() => {
                                toggleDarkMode();
                                setSelectedTheme();
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                {/* <Text style={styles.footerText}>hello</Text> */}
                <DrawerItem label="Log Out" icon={() => <Icon path={require('../../Assets/images/logout.png')} backgroundColor="#fed6da"/>} onPress={() => {}} labelStyle={styles.footerText}  />
                <View style={styles.innerFooter}>
                    <TopNav title="Mina" text="+20 101 131 5412" type="menu"/>
                    <Image source={require('../../Assets/images/dots.png')}/>
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
    },
    outerLogoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: 20,
    },
    img: {
        marginStart: 5,
    },
    icon: {
        marginEnd: 20,
    },
    text: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
        lineHeight: 18,
        marginLeft:-20,
    },
    label: {
        borderRadius: 12,
    },
    darkModeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 12,
    },
    darkModeInnerContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    footer: {
        // padding: 20,
    },
    footerText: {
        fontWeight:'bold',
        fontSize: 18,
        color: '#EB001B',
        marginBottom:0,
        paddingBottom:0,
        marginLeft:-20,
    },
    innerFooter:{
        margin:16,
        marginTop:0,
        backgroundColor:'white',
        borderRadius:18,
        paddingStart:15,
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingEnd:25,
        elevation:10,
    },
    // drawerItem: {
    //     // marginVertical: 0,
    //     // justifyContent:'center',
    // },

});

export default CustomDrawerContent;
