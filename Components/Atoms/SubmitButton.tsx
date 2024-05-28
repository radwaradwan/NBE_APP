import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
// import FingerPrint from './FingerPrint';
type Props = {
    title: string;
    onPress: () => void;
    iconRight?:any,
    type?:string,
    disabled?:boolean,
};

// function pressHandler() {
//     console.log('hello');
// }

function SubmitButton(props: Props) {
    const {title,onPress,iconRight,type,disabled} = props;
    return (
        <View style={[
            styles.buttonOuterContaier,
            disabled ? styles.buttonDisabled : styles.buttonEnabled]}>
            <Pressable style={styles.buttonInnerContainer} onPress={disabled ? undefined : onPress}
            android_ripple={{ color: disabled ?  'transparent' : '#07984C' }} >
                <Text style={type === 'airpay' ? styles.buttonTextIcon : styles.buttonText}>{title}</Text>
                {iconRight && <View style={styles.fingerPrintContainer}>
                    <Image source={iconRight}/>
                </View>}
                {/* {iconRight && <FingerPrint/>} */}
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    buttonOuterContaier:{
        marginVertical: 16,
        borderRadius: 12,
        overflow:'hidden',
        // width:270,
    },
    buttonInnerContainer:{
        // backgroundColor: '#007236',
        padding:14,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
    },
    buttonEnabled: {
        backgroundColor: '#007236',
    },
    buttonDisabled: {
        backgroundColor: 'gray',
    },
    buttonText:{
        flex:1,
        color: 'white',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonTextIcon:{
        marginStart:120,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    fingerPrintContainer:{
        width:40,
        height:38,
        borderRadius:12,
        borderWidth:1,
        borderColor:'#F6A721',
        // padding:8,
        justifyContent:'center',
        alignItems:'center',
        marginStart:100,
    },
});
export default SubmitButton;
