import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

function OTPTimer() {
    const [timer, setTimer] = useState<number>(60); // Timer in seconds
    const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }
        else {
            setIsResendEnabled(true);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const handleResendOTP = () => {
        setTimer(60); // Reset timer
        setIsResendEnabled(false); // Disable resend button
    };

    return (
        <View>
            {timer > 0 ?
            (<Text style={styles.disabled}>Request new one in {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</Text>)
            :
            (
            <TouchableOpacity onPress={handleResendOTP} disabled={!isResendEnabled}>
                    <Text style={isResendEnabled ? styles.enabled : styles.disabled}>Resend OTP</Text>
            </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    enabled:{
        color:'#007236',
        fontWeight:'bold',
        fontSize:16,
    },
    disabled:{
        // color:'#000',
        color:theme.textColor,
        fontWeight:'bold',
        fontSize:16,
    },

});

export default OTPTimer;
