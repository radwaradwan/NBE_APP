import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SubmitButton from '../Atoms/SubmitButton';
import SignUpNav from '../Molecules/SignUpNav';
import DropdownMenu from '../Atoms/DropdownMenu';
import SignUpInputs from '../Atoms/SignUpInputs';
const typeofTransfer = [
    { label: 'Between your accounts', value: '1' },
    { label: 'From your account to different account', value: '2' },
    { label: 'From debit to credit', value: '3' },
];

const transferFrom = [
    { label: '056-32154875423 - $1,523.48', value: '1' },
    { label: '042-65321452124 - $5000', value: '2' },
    { label: '042-65321452124 - $3,145,25', value: '3' },
];

const transferTo = [
    { label: '057-32154875423 - $1,524,240', value: '1' },
    { label: '043-65321452124 - $1,224,5', value: '2' },
    { label: '044-65321452124 - $4,246,23', value: '3' },
];

type transferProp={
    navigation:any,
};

function Transfer(props:transferProp){
    const {navigation} = props;
    const navigateToTransferOTPScreen = () => {
        console.log('hello1');
        navigation.navigate('transferOTP'); // Navigate to 'otp' screen
        console.log('hello2');
    };
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <SignUpNav navigation={navigation} screenName="home"/>
                </View>
                <Text style={styles.title}>Transfer</Text>
                <View >
                    <DropdownMenu options={typeofTransfer} title="Type of transfer"/>
                    <DropdownMenu options={transferFrom} title="Transfer from"/>
                    <DropdownMenu options={transferTo} title="Transfer to"/>
                    <SignUpInputs title="Amount to transfer" type="transfer"/>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <SubmitButton title="Transfer" onPress={navigateToTransferOTPScreen} />
            </View>
        </View>
    );



}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#F1F3FB',
    justifyContent:'space-between',

},
innerContainer:{
    marginBottom:10,
    marginHorizontal:20,
},
header:{
marginTop:20,
},
title:{
fontSize: 24,
fontWeight: 'bold',
color:'#000',
marginBottom:20,
},
inputInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
});
export default Transfer;
