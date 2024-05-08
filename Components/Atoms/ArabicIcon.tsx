import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

function ArabicIcon() {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>AR</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer:{
        backgroundColor:'#fff',
        padding:12,
        borderRadius:12,
    },
    text:{
        color:'#007236',
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
    },
});
export default ArabicIcon;
