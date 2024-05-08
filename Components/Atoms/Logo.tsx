import React from 'react';
import {View, Image} from 'react-native';
type Props ={
    type:string,
}
function Logo(props:Props) {
    const {type} = props;
    const loginLogo = require('../../Assets/images/logo.png');
    const splashLogo =  require('../../Assets/images/splashLogo.png');
    return (
        <View>
            <Image source={type === 'login' ? loginLogo : splashLogo }/>
        </View>
    );
}

export default Logo;
