import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
// import FingerPrint from './FingerPrint';
type Props = {
    title: string;
    onPress: () => void;
    iconRight?:any,
};

// function pressHandler() {
//     console.log('hello');
// }

function SubmitButton(props: Props) {
    const {title,onPress,iconRight} = props;
    return (
        <View style={styles.buttonOuterContaier}>
            <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{color:'#07984C'}} >
                <Text style={[styles.buttonText, iconRight !== 'null' && styles.buttonTextIcon]}>{title}</Text>
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
        backgroundColor: '#007236',
        padding:14,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-around',
    },
    buttonText:{
        color: 'white',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonTextIcon:{
        marginStart:120,
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
