import React from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native';
type Props ={
    navigation:any,
};
function DonotHaveAccount(props: Props) {
    const {navigation} = props;
    const navigateToSignUpMobileScreen = () => {
        console.log('hello1');
        navigation.navigate('signup'); // Navigate to 'otp' screen
        console.log('hello2');
    };
    // const pressHandler = () =>{
    //     console.log('pressed');
    // };
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>Don&#39;t have an account?</Text>
            <Pressable onPress={navigateToSignUpMobileScreen}>
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
