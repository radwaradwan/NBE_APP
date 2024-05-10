import React from 'react';
import { View , StyleSheet} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';


function OTP(){
    return(
        <View style={styles.container}>
            <OtpInputs inputStyles={styles.otp} focusStyles={styles.focus} numberOfInputs={6} autofillFromClipboard={true} handleChange={(code) => console.log(code)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:10,
    },
    otp: {
        width: 40,
        height: 60,
        borderRadius:10,
        textAlign: 'center',
        backgroundColor:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    focus:{
        borderColor:'#007236',
        borderWidth:3,
        borderRadius:10,
    },
});
export default OTP;
