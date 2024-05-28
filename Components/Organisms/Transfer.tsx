import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
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

const validationSchema = Yup.object().shape({
    typeOfTransfer: Yup.string().required('Type of transfer is required'),
    transferFrom: Yup.string().required('Transfer from is required'),
    transferTo: Yup.string().required('Transfer to is required'),
    amount: Yup.number()
        .required('Amount is required')
        .positive('Amount must be positive')
        .typeError('Amount must be a number'),
});

type TransferProps = {
    navigation: any,
};

function Transfer(props: TransferProps) {
    const { navigation } = props;

    const navigateToTransferOTPScreen = (values: any) => {
        console.log('hello1');
        console.log(values);
        navigation.navigate('transferOTP');
        console.log('hello2');
    };

    return (
        <Formik
            initialValues={{ typeOfTransfer: '', transferFrom: '', transferTo: '', amount: '' }}
            validationSchema={validationSchema}
            onSubmit={navigateToTransferOTPScreen}
        >
            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <View style={styles.header}>
                            <SignUpNav navigation={navigation} screenName="home" />
                        </View>
                        <Text style={styles.title}>Transfer</Text>
                        <View>
                            <DropdownMenu
                                options={typeofTransfer}
                                title="Type of transfer"
                                value={values.typeOfTransfer}
                                onValueChange={(value:string) => setFieldValue('typeOfTransfer', value)}
                            />
                            {touched.typeOfTransfer && errors.typeOfTransfer && (
                                <Text style={styles.errorText}>{errors.typeOfTransfer}</Text>
                            )}
                            <DropdownMenu
                                options={transferFrom}
                                title="Transfer from"
                                value={values.transferFrom}
                                onValueChange={(value:string) => setFieldValue('transferFrom', value)}
                            />
                            {touched.transferFrom && errors.transferFrom && (
                                <Text style={styles.errorText}>{errors.transferFrom}</Text>
                            )}
                            <DropdownMenu
                                options={transferTo}
                                title="Transfer to"
                                value={values.transferTo}
                                onValueChange={(value:string) => setFieldValue('transferTo', value)}
                            />
                            {touched.transferTo && errors.transferTo && (
                                <Text style={styles.errorText}>{errors.transferTo}</Text>
                            )}
                            <SignUpInputs
                                title="Amount to transfer"
                                type="transfer"
                                value={values.amount}
                                onChangeText={handleChange('amount')}
                            />
                            {touched.amount && errors.amount && (
                                <Text style={styles.errorText}>{errors.amount}</Text>
                            )}
                        </View>
                    </View>
                    <View style={styles.innerContainer}>
                        <SubmitButton title="Transfer" onPress={handleSubmit} disabled={!values.typeOfTransfer || !values.transferFrom || !values.transferTo || !values.amount} />
                    </View>
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F3FB',
        justifyContent: 'space-between',
    },
    innerContainer: {
        marginBottom: 10,
        marginHorizontal: 20,
    },
    header: {
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        marginLeft: 20,
        marginTop: -10,
        marginBottom: 10,
    },
    inputInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Transfer;
