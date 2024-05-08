import React from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native';

function DonotHaveAccount() {
    const pressHandler = () =>{
        console.log('pressed');
    };
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>Don&#39;t have an account?</Text>
            <Pressable onPress={pressHandler}>
                <Text style={styles.signUpButton}>Sign up</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:12,
    },
    text:{
        color:'#fff',
    },
    signUpButton:{
        textDecorationLine: 'underline',
        color:'#F6A721',
        marginLeft:2,
        fontWeight:'bold',
    },
});
export default DonotHaveAccount;
