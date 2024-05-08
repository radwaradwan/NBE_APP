import React from 'react';
import { View,StyleSheet,Text} from 'react-native';
import RememberMeCheckBox from '../Atoms/RememberMeCheckBox';
function RememberMeRow() {
    return (
        <View style={styles.checkBoxContainer}>
            <RememberMeCheckBox />
            <Text style={styles.text}>Forgot password?</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    checkBoxContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginStart:22,
        marginEnd:20,
        marginVertical:8,
    },
    text:{
        color:'#fff',
    },
});
export default RememberMeRow;
