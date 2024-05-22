import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Accordion from '../Molecules/Accordion';
import SubmitButton from '../Atoms/SubmitButton';
import SignUpNav from '../Molecules/SignUpNav';
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
            <SignUpNav navigation={navigation} screenName="home"/>
            <Text style={styles.title}>Transfer</Text>
            <View>
                <Accordion options={typeofTransfer} title="Type of transfer"/>
                <Accordion options={transferFrom} title="Transfer from"/>
                <Accordion options={transferTo} title="Transfer to"/>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Amount to transfer</Text>
                    <View style={styles.inputInnerContainer}>
                        <Text style={styles.text}>$</Text>
                        <TextInput
                        style={styles.text}
                        keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>
            <View>
                <SubmitButton title="Transfer" onPress={navigateToTransferOTPScreen} />
            </View>
        </View>
    );



}
const styles = StyleSheet.create({
container:{
    flex:1,
// marginTop:20,
marginHorizontal:20,
justifyContent:'space-between',
marginBottom:10,
backgroundColor:'#F1F3FB',
},
title:{
marginTop:-130,
fontSize: 24,
fontWeight: 'bold',
color:'#000',
marginBottom:-100,
},
inputContainer: {
    marginBottom: 10,
    backgroundColor:'#fff',
    paddingTop:10,
    paddingHorizontal:18,
    borderRadius:10,
    overflow:'hidden',
    // height:400,
},
text: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000',
},
inputInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10,
},
});
export default Transfer;
