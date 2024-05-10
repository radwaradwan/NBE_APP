import React from 'react';
import {View} from 'react-native';
import LoginInputs from '../Molecules/LoginInputs';
import LoginNav from '../Molecules/LoginNav';
import HeaderLoginText from '../Atoms/HeaderLoginText';
import RememberMeRow from '../Molecules/RememberMeRow';
import LoginButtonRow from '../Molecules/LoginButtonRow';
import DonotHaveAccount from '../Atoms/DonotHaveAccount';
import Footer from '../Molecules/Footer';
function Login() {
    return (
        <View>
            <LoginNav/>
            <HeaderLoginText/>
            <LoginInputs/>
            <RememberMeRow/>
            <LoginButtonRow/>
            <DonotHaveAccount/>
            <Footer/>
        </View>
    );
}

export default Login;
