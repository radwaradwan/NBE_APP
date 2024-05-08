import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import LoginFooter from '../Atoms/LoginFooter';
function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <LoginFooter text="Contact Us"/>
                <Text style={styles.dash}> - </Text>
                <LoginFooter text="FAQs"/>
                <Text style={styles.dash}> - </Text>
                <LoginFooter text="Help"/>
            </View>
            <View>
                <Text style={styles.copyright}>Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding:10,
        marginTop:37,
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:5,
    },
    text:{
        color:'#F6A721',
    },
    dash:{
        color:'#fff',
        marginHorizontal:2,
    },
    copyright:{
        color:'#fff',
        fontSize:10,
        paddingBottom:10,
        textAlign:'center',
    },
});
export default Footer;
