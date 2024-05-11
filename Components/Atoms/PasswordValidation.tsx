import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
type Props={
    text:string,
}
function PasswordValidation(props:Props){
    const {text} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.circle}> </Text>
            <Text style={styles.text}>{text}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5,
    },
    circle:{
        width:15,
        height:15,
        marginEnd:10,
        backgroundColor:'gray',
        borderRadius:50,
    },
    text:{
        color:'#000',
        fontSize:16,
    },
});

export default PasswordValidation;
