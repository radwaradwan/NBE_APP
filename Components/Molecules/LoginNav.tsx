import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from '../Atoms/Logo';
import TextLogo from '../Atoms/TextLogo';
import ArabicIcon from '../Atoms/ArabicIcon';
function LoginNav() {
    return (
        <View style={styles.navContainer}>
            <View>
                <ArabicIcon/>
            </View>
            <View style={styles.logoContainer}>
                <TextLogo type="login"/>
                <Logo type="login"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20,
        marginBottom:60,
        marginTop:30,
    },
    logoContainer:{
        flexDirection:'row',
    },
});
export default LoginNav;
