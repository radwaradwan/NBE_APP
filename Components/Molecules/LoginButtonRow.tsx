import React from 'react';
import {View,StyleSheet} from 'react-native';
import SubmitButton from '../Atoms/SubmitButton';
import FingerPrint from '../Atoms/FingerPrint';
function LoginButtonRow() {
    return (
        <View style={styles.submitContainer}>
            <SubmitButton title="Log In"/>
            <FingerPrint/>
        </View>
    );
}
const styles = StyleSheet.create({
    submitContainer:{
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
});

export default LoginButtonRow;
