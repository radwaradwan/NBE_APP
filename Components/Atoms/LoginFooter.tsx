import React from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native';
type Props ={
    text:string,
}
function LoginFooter(props:Props) {
    const {text} = props;
    return (
        <View style={styles.textContainer}>
            <Pressable>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer:{
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent:'center',
    },
    text:{
        color:'#F6A721',
    },
});
export default LoginFooter;
