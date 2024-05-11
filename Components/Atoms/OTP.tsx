import React from 'react';
import { View , StyleSheet} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';


function OTP(){
    return(
        <View style={styles.container}>
            <OtpInputs style={styles.test} inputStyles={styles.otp} focusStyles={styles.focus}
            numberOfInputs={5} autofillFromClipboard={true} handleChange={(code) => console.log(code)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    test:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
    },
    container: {
        // flex:1,
        // marginVertical:20,
        // width:40,
        // marginLeft:20,
        // justifyContent:'space-between',
    },
    otp: {
        width: 50,
        height: 65,
        borderRadius:10,
        textAlign: 'center',
        backgroundColor:'white',
        fontSize:20,
        fontWeight:'bold',
        justifyContent:'space-between',
    },
    focus:{
        // borderColor:'#007236',
        // borderWidth:3,
        // borderRadius:10,
    },
});

export default OTP;
