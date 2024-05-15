import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import Transfer from '../Screens/Transfer';
import SubmitButton from './SubmitButton';
function ModalComponent() {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const renderModalContent = () => (
        <View style={styles.modalOuterContent}>
            <View style={styles.modalContent}>
                <Image source={require('../../Assets/images/transferConfirmation.png')}/>
                <Text style={styles.congratsText}>Mission Complete</Text>
                <Text>Transfer to Jsmine Robert</Text>
                <Text>was successful</Text>
                {/* <TouchableOpacity style={styles.finishButton} onPress={closeModal}>
                    <Text style={styles.finishButtonText}>Finish</Text>
                </TouchableOpacity> */}
            </View>
            <View>
                    <SubmitButton title="Finish" onPress={closeModal}/>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Transfer onPress={toggleModal}/>
            <Modal isVisible={isModalVisible} animationIn="fadeIn" animationOut="fadeOut">
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
});

export default ModalComponent;
