import React from 'react';
import {View, Image} from 'react-native';
type Props ={
    type:string,
}
function TextLogo(props:Props) {
    const {type} = props;
    const loginTLogo = require('../../Assets/images/tLogo.png');
    const splashTLogo =  require('../../Assets/images/splashTLogo.png');
    return (
        <View>
            <Image source={type === 'login' ? loginTLogo : splashTLogo }/>
        </View>
    );
}

export default TextLogo;