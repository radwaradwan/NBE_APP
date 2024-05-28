import React from 'react';
import {View} from 'react-native';
import LoginNav from '../Molecules/LoginNav';
import HeaderLoginText from '../Atoms/HeaderLoginText';
import LoginForm from '../Molecules/LoginForm';
import DonotHaveAccount from '../Atoms/DonotHaveAccount';
import Footer from '../Molecules/Footer';
type Props = {
    navigation : any,
};
function Login(props:Props) {
    const {navigation} = props;
    return (
        <View>
            <LoginNav/>
            <HeaderLoginText/>
            <LoginForm navigation={navigation}/>
            <DonotHaveAccount navigation={navigation}/>
            <Footer/>
        </View>
    );
}

export default Login;
