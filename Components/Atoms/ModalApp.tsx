import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Modal from 'react-native-modal';
// import Transfer from '../Screens/Transfer';
import SubmitButton from './SubmitButton';
// import TransferOtpScreen from '../Organisms/TransferOtpScreen';
type Props ={
    navigation :any,
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void,
    path:any,
    titleText: string,
    descriptionText: string,
    money: string,
    confirmButtonText?: string,
    cancelButtonText?: string,
    // onConfirmPress?(): void,
    // onCancelPress?(): void,
    screenName:string,
};
function ModalApp(props:Props) {
    const {navigation ,
        modalVisible,
        setModalVisible,
        path,
        titleText,
        descriptionText,
        money,
        confirmButtonText,
        cancelButtonText,
        // onConfirmPress,
        // onCancelPress,
        screenName} = props;
    // const [isModalVisible, setModalVisible] = useState<boolean>(false);

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };
    const navigateToHomeScreen = () => {
        console.log('hello1');
        setModalVisible(!modalVisible);
        navigation.navigate('home'); // Navigate to 'otp' screen
        console.log('hello2');
    };
    const navigateToAirPayScreen = () => {
        console.log('hello1');
        setModalVisible(!modalVisible);
        navigation.navigate('airPay'); // Navigate to 'otp' screen
        console.log('hello2');
    };

    // const closeModal = () => {
    //     setModalVisible(false);
    // };

    const renderModalContent = () => (
        <View style={styles.modalOuterContent}>
            <View style={styles.modalContent}>
                <Image source={path}/>
                <Text style={[styles.congratsText , screenName === 'airpay' && styles.cancel]}>{titleText}</Text>
                <Text>{descriptionText}</Text>
                <Text style={screenName === 'airpay' && styles.money}>{money}</Text>
                {/* <TouchableOpacity style={styles.finishButton} onPress={closeModal}>
                    <Text style={styles.finishButtonText}>Finish</Text>
                </TouchableOpacity> */}
            </View>
            <View>
                    {screenName === 'transfer' && <SubmitButton title="Finish" onPress={navigateToHomeScreen}/>}
                    {screenName === 'airpay' && confirmButtonText && <SubmitButton title="Done"
                        onPress={navigateToHomeScreen}/>}
                    <View style={styles.cancelContainer}>
                        {screenName === 'airpay' && cancelButtonText && <Pressable
                            onPress={navigateToAirPayScreen} style={styles.cancelButton}>
                                <Text style={styles.cancel}>Cancel</Text>
                            </Pressable>
                        }
                        {screenName === 'airpay' && cancelButtonText && <View style={styles.submitButtonContainer}><SubmitButton title="Try Again"
                            onPress={navigateToAirPayScreen}/></View>}
                    </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* <Transfer onPress={toggleModal}/> */}
            {/* <TransferOtpScreen navigation={navigation}/> */}
            <Modal isVisible={modalVisible} animationIn="fadeIn" animationOut="fadeOut">
                {renderModalContent()}
            </Modal>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalOuterContent:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    congratsText: {
        // marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color:'#000',
    },
    finishButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    finishButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    money: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#000',
    },
    cancelContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },
    cancelButton:{
        borderColor:'red',
        borderWidth:1,
        width:120,
        borderRadius:12,
        height:55,
        justifyContent:'center',
        alignItems:'center',
        // marginEnd:20,
    },
    cancel:{
        color:'red',
        fontWeight:'bold',
        fontSize:18,
    },
    submitButtonContainer:{
        width:130,
        height:87,
    },
});

export default ModalApp;
