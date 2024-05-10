import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import TextLogo from '../Atoms/TextLogo';
import BackButton from '../Atoms/BackButton';
function SignUpNav() {
    return (
        <View style={styles.navContainer}>
            <View>
                <BackButton/>
            </View>
            <View style={styles.logoContainer}>
                <TextLogo type="splash"/>
                <Image source={require('../../Assets/images/signupLogo.png')} style={styles.img}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // marginHorizontal:20,
        marginBottom:60,
        marginTop:30,
    },
    logoContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    img:{
        marginStart:5,
    },
});
export default SignUpNav;
