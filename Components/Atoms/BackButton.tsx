import React from 'react';
import {View, StyleSheet,Image, Pressable} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
    onPress: () => void,
};


function BackButton(props: Props) {
    const {onPress} = props;
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{color:'#07984C'}} >
                <Image source={require('../../Assets/images/arrowback.png')}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        overflow:'hidden',
        borderRadius:12,
        width:40,
    },
    buttonInnerContainer:{
        backgroundColor:'#007236',
        padding:12,
        alignItems:'center',
        justifyContent:'center',
    },
});
export default BackButton;
