import React from 'react';
import {View,StyleSheet} from 'react-native';
import SubmitButton from '../Atoms/SubmitButton';
import FingerPrint from '../Atoms/FingerPrint';
// import { NavigationProp } from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';
type Props ={
    navigation :any;
};

function LoginButtonRow(props:Props) {
    const {navigation} = props;
    const navigateToHomeScreen = () => {
        console.log('hello1');
        navigation?.navigate('home'); // Navigate to 'otp' screen
        console.log('hello2');
    };
    // const  navigate  = useNavigation<StackNavigationProp<RootStackParamList>>();
    // const navigation = useNavigation();
    return (
        <View style={styles.submitContainer}>
            <View style={styles.test}>
                <SubmitButton title="Log In" onPress={navigateToHomeScreen}/>
            </View>
            <FingerPrint/>
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
});

export default LoginButtonRow;
