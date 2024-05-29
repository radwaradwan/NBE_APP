import React, { useState } from 'react';
import {View,StyleSheet, Text} from 'react-native';
import SubmitButton from '../Atoms/SubmitButton';
import FingerPrint from '../Atoms/FingerPrint';
import UserInput from '../Atoms/UserInput';
import RememberMeRow from './RememberMeRow';
import { setUserName } from '../Storage/mmkv';

type Props ={
    navigation :any;
};

function LoginForm(props:Props) {
    const {navigation} = props;


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateInputs = () => {
        let valid = true;

        if (!username) {
            setUsernameError('Username is required');
            valid = false;
        } else {
            setUsernameError('');
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters');
            valid = false;
        } else {
            setPasswordError('');
        }

        return valid;
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if (validateInputs()) {
            setUsername('');
            setPassword('');
            setUserName(username);
            navigation.navigate('Drawer');
        } else {
            // Alert.alert('Validation Error', 'Please fill out all fields correctly.');
        }
    };

    return (
        <View>
            <View>
                <UserInput placeholder="username" title="Username"
                path={require('../../Assets/images/user.png')} type="username"
                onChangeText={setUsername}
                value={username}/>
                {isSubmitted && usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
                <UserInput placeholder="password" title="Password"
                path={require('../../Assets/images/password.png')} type="password"
                onChangeText={setPassword}
                value={password}/>
                {isSubmitted && passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>
            <RememberMeRow/>
            <View style={styles.submitContainer}>
                <View style={styles.test}>
                    <SubmitButton title="Log In" onPress={handleSubmit}/>
                </View>
                <FingerPrint/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    submitContainer:{
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    test:{
        width:270,
    },
    errorText: {
        color: 'red',
        marginLeft: 20,
        marginTop: -10,
        marginBottom: 10,
    },
});

export default LoginForm;
