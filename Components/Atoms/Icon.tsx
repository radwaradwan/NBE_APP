import React from 'react';
import {View,Image, StyleSheet } from 'react-native';
type Props ={
    path:any,
    backgroundColor?:string,
};
function Icon(props:Props) {
    const {path,backgroundColor} = props;
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor || '#bababa' }]}>
            <Image source={path} style={styles.img}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:30,
        height:30,
        // backgroundColor:'#bababa',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
    },
    img:{
        // tintColor:'#1B1B1B',
    },
});


export default Icon;

