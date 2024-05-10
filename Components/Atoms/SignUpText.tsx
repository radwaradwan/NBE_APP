import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

type Props = {
    text1:string,
    text2:string,
}

function SignUpText(props:Props) {
    const {text1,text2} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>{text1}</Text>
            <Text>{text2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    },
    text1:{
        fontWeight:'bold',
        color:'#000',
        fontSize:20,
        marginBottom:2,
    },
});
export default SignUpText;
