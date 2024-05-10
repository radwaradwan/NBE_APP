import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

function BackButton() {
    return (
        <View style={styles.textContainer}>
            <Image source={require('../../Assets/images/arrowback.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer:{
        backgroundColor:'#007236',
        padding:12,
        width:40,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
    },
});
export default BackButton;
