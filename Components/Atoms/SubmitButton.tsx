import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
type Props = {
    title: string;
    onPress: () => void;
};

// function pressHandler() {
//     console.log('hello');
// }

function SubmitButton(props: Props) {
    const {title,onPress} = props;
    return (
        <View style={styles.buttonOuterContaier}>
            <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{color:'#07984C'}} >
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
        backgroundColor: '#007236',
        padding:14,
    },
    buttonText:{
        color: 'white',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

});
export default SubmitButton;
