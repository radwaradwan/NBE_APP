import React from 'react';
import {View} from 'react-native';
import LoginInputs from '../Molecules/LoginInputs';
import LoginNav from '../Molecules/LoginNav';
import HeaderLoginText from '../Atoms/HeaderLoginText';
import RememberMeRow from '../Molecules/RememberMeRow';
import LoginButtonRow from '../Molecules/LoginButtonRow';
import DonotHaveAccount from '../Atoms/DonotHaveAccount';
// import {useNavigation} from '@react-navigation/native';
import Footer from '../Molecules/Footer';
// import { NavigationProp } from '@react-navigation/native';
type Props = {
    navigation : any,
};
function Login(props:Props) {
    const {navigation} = props;
    return (
        <View>
            <LoginNav/>
            <HeaderLoginText/>
            <LoginInputs/>
            <RememberMeRow/>
            <LoginButtonRow navigation={navigation}/>
            <DonotHaveAccount navigation={navigation}/>
            <Footer/>
        </View>
    );
}

export default Login;
