import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function Input() {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Amount to transfer</Text>
            <View style={styles.inputInnerContainer}>
                <Text style={styles.text}>$</Text>
                <TextInput
                style={styles.text}
                keyboardType="numeric"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
    marginBottom: 10,
    backgroundColor:'#fff',
    paddingTop:10,
    paddingHorizontal:18,
    borderRadius:10,
    overflow:'hidden',
    margin:20,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#000',
    },
    inputInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
export default Input;
