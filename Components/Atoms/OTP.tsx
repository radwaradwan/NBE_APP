import React from 'react';
import { View , StyleSheet} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';


function OTP(){
    return(
        <View style={styles.container}>
            <OtpInputs inputStyles={styles.otp} numberOfInputs={6} autofillFromClipboard={true} handleChange={(code) => console.log(code)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    otp: {
        width: 40,
        height: 40,
        margin: 10,
        borderColor:'gray',
        borderRadius:5,
        borderWidth:1,
        textAlign: 'center',
        flexDirection: 'row',
    },
});
export default OTP;
