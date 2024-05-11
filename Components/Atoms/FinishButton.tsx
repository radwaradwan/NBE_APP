import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
type Props = {
    title: string;
};

function pressHandler() {
    console.log('hello');
}

function FinishButton(props: Props) {
    const {title} = props;
    return (
        <View style={styles.buttonOuterContaier}>
            <Pressable style={styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{color:'#07984C'}} >
                <Text style={styles.buttonText}>{title}</Text>
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
        backgroundColor: 'white',
        padding:14,
    },
    buttonText:{
        color: '#007236',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

});
export default FinishButton;
