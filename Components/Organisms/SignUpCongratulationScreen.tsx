import React from 'react';
import {ImageBackground, StyleSheet, Text, View,StatusBar} from 'react-native';
import Logo from '../Atoms/Logo';
import TextLogo from '../Atoms/TextLogo';
import FinishButton from '../Atoms/FinishButton';
type Props ={
    navigation :any,
};
function SignUpCongratulationScreen(props:Props){
    const {navigation} = props;
    const navigateToHomeScreen = () => {
        console.log('hello1');
        navigation.navigate('home'); // Navigate to 'otp' screen
        console.log('hello2');
    };
    return(
        <View style={styles.outerContainer}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.logoContainer}>
                    <TextLogo type="login"/>
                    <Logo type="login"/>
                </View>
                <ImageBackground source={require('../../Assets/images/congratBackground.png')} style={styles.img}>
                    <View>
                        <Text style={styles.congrat}>Congratulations</Text>
                        <Text style={styles.underCongrat}>You have successfully registered in NBE online banking service</Text>
                    </View>
                    <View style={styles.FinishButton}>
                        <FinishButton title="Finish" onPress={navigateToHomeScreen}/>
                    </View>
                </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    outerContainer:{
        backgroundColor:'#007236',
        height:'100%',
    },
    img:{
        height:'100%',
        justifyContent:'space-between',
    },
    logoContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom:20,
        marginTop:50,
        marginEnd:20,
    },
    congrat:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30,
        marginHorizontal:20,
    },
    underCongrat:{
        color:'#fff',
        fontSize:16,
        marginHorizontal:20,
    },
    FinishButton:{
        marginVertical:120,
        marginHorizontal:20,
    },
});
export default SignUpCongratulationScreen;
