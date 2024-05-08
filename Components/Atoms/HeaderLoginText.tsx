import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

function HeaderLoginText() {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>Welcome to</Text>
            <Text style={styles.text}>The National Bank</Text>
            <Text style={styles.text}>of Egypt</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer:{
        marginBottom:22,
    },
    text:{
        fontSize:40,
        color:'#fff',
        marginStart:20,
        fontWeight:'bold',
    },
});
export default HeaderLoginText;
