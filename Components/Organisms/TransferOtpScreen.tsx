import React,{useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View,Text} from 'react-native';
import SignUpNav from '../Molecules/SignUpNav';
import SignUpText from '../Atoms/SignUpText';
import OTP from '../Atoms/OTP';
import OTPTimer from '../Atoms/OTPTimer';
import SubmitButton from '../Atoms/SubmitButton';
// import ModalComponent from '../Atoms/ModalComponent';
import ModalApp from '../Atoms/ModalApp';
type Props ={
    navigation :any,
};
function TransferOtpScreen(props:Props){
    const { navigation } = props;
    const [showModal,setShowModal] = useState<boolean>(false);
    // const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const navigateToModalScreen = () => {
        console.log('hello1');
        setShowModal(true);
        // navigation.navigate('modal'); // Navigate to 'otp' screen
        console.log('hello2');
    };
    return(
        <KeyboardAvoidingView style={styles.outerContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.innerContainer}>
                <SignUpNav screenName="transfer" navigation={navigation}/>
                <SignUpText text1="OTP" text2="Enter 5 digit code we sent to +20 101 131 5412"/>
                <OTP/>
                <Text>Didn&#39;t receive the code?</Text>
                <OTPTimer/>
            </View>
            <View style={styles.innerContainer}>
                <SubmitButton title="Submit" onPress={navigateToModalScreen} />
                {showModal && <ModalApp
                navigation={navigation}
                modalVisible={showModal}
                setModalVisible={setShowModal}
                path={require('../../Assets/images/transferConfirmation.png')}
                titleText="Mission Complete"
                descriptionText="Transfer to Jsmine  Robert"
                money="was successful"
                screenName="transfer"
                />}
            </View>
            {/* Render the ModalComponent conditionally based on the state
            {isModalVisible && <ModalComponent navigation={navigation} />} */}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    outerContainer:{
        backgroundColor:'#F1F3FB',
        justifyContent:'space-between',
        height:'100%',
    },
    innerContainer:{
        margin:20,
    },
});
export default TransferOtpScreen;

