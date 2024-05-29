import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { theme } from '../theme/theme';
type Props={
    text:string,
    isValid: boolean,
}
function PasswordValidation(props:Props){
    const {text,isValid} = props;
    return(
        <View style={styles.container}>
            <Text style={[styles.circle, isValid && styles.circleValid]}> </Text>
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
    circleValid: {
        backgroundColor: 'green',
    },
    text:{
        // color:'#000',
        color:theme.textColor,
        fontSize:16,
    },
});

export default PasswordValidation;
