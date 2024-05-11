import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function OTPTimer() {
    const [timer, setTimer] = useState<number>(120); // Timer in seconds
    const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
        interval = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000);
        } else {
        setIsResendEnabled(true);
        }

        return () => clearInterval(interval);
    }, [timer]);

    const handleResendOTP = () => {
        setTimer(120); // Reset timer
        setIsResendEnabled(false); // Disable resend button
    };

    return (
        <View>
            {timer > 0 ?
            (<Text>Resend OTP in {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</Text>)
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
        color:'blue',
    },
    disabled:{
        color:'gray',
    },

});

export default OTPTimer;
