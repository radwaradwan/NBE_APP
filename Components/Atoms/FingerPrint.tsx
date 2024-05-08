import React from 'react';
import {View, Image,StyleSheet} from 'react-native';

function FingerPrint() {
    const fingerPrint = require('../../Assets/images/fingerPrint.png');
    return (
        <View style={styles.fingerPrintContainer}>
            <Image source={fingerPrint }/>
        </View>
    );
}
const styles = StyleSheet.create({
    fingerPrintContainer:{
        width:50,
        height:50,
        borderRadius:12,
        borderWidth:1,
        borderColor:'#F6A721',
        padding:8,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default FingerPrint;
