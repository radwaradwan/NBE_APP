import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { theme } from '../theme/theme';
type Props = {
    text1:string,
    text2:string,
}

function SignUpText(props:Props) {
    const {text1,text2} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>{text1}</Text>
            <Text style={styles.text2}>{text2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    },
    text1:{
        fontWeight:'bold',
        // color:'#000',
        color:theme.textColor,
        fontSize:20,
        marginBottom:2,
    },
    text2:{
        color:theme.textColorGrey,
    },
});
export default SignUpText;
