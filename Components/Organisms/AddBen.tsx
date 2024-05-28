import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SignUpNav from '../Molecules/SignUpNav';
import SignUpInputs from '../Atoms/SignUpInputs';
import DropdownMenu from '../Atoms/DropdownMenu';
import SubmitButton from '../Atoms/SubmitButton';

const bankBranch = [
    { label: '001 - Main Branch', value: '1' },
    { label: '065 - City Stars Mall', value: '2' },
    { label: '127 - Mall of Arabia', value: '3' },
];

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    bankBranch: Yup.string().required('Bank branch is required'),
    accountNumber: Yup.string()
        .required('Account number is required')
        .length(14, 'Account number must be exactly 14 digits'),
    phoneNumber: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits'),
    email: Yup.string()
        .required('Email is required')
        .email('Enter a valid email'),
});

function AddBen() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                bankBranch: '',
                accountNumber: '',
                phoneNumber: '',
                email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form values', values);
            }}
        >
            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <View>
                            <SignUpNav />
                            <View style={styles.cameraContainer}>
                                <View style={styles.cameraInnerContainer}>
                                    <Image source={require('../../Assets/images/camera.png')} />
                                </View>
                            </View>
                            <View style={styles.nameContainer}>
                                <View style={styles.name}>
                                    <SignUpInputs
                                        title="First name"
                                        type="add"
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                        // onBlur={handleBlur('firstName')}
                                    />
                                    {touched.firstName && errors.firstName && (
                                        <Text style={styles.errorText}>{errors.firstName}</Text>
                                    )}
                                </View>
                                <View style={styles.name}>
                                    <SignUpInputs
                                        title="Last name"
                                        type="add"
                                        value={values.lastName}
                                        onChangeText={handleChange('lastName')}
                                        // onBlur={handleBlur('lastName')}
                                    />
                                    {touched.lastName && errors.lastName && (
                                        <Text style={styles.errorText}>{errors.lastName}</Text>
                                    )}
                                </View>
                            </View>
                            <DropdownMenu
                                options={bankBranch}
                                title="Bank branch"
                                value={values.bankBranch}
                                onValueChange={(value) => setFieldValue('bankBranch', value)}
                            />
                            {touched.bankBranch && errors.bankBranch && (
                                <Text style={styles.errorText}>{errors.bankBranch}</Text>
                            )}
                            <SignUpInputs
                                title="Account number"
                                type="add"
                                value={values.accountNumber}
                                onChangeText={handleChange('accountNumber')}
                                // onBlur={handleBlur('accountNumber')}
                            />
                            {touched.accountNumber && errors.accountNumber && (
                                <Text style={styles.errorText}>{errors.accountNumber}</Text>
                            )}
                            <SignUpInputs
                                title="Phone number"
                                type="add"
                                value={values.phoneNumber}
                                onChangeText={handleChange('phoneNumber')}
                                // onBlur={handleBlur('phoneNumber')}
                            />
                            {touched.phoneNumber && errors.phoneNumber && (
                                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                            )}
                            <SignUpInputs
                                title="Email"
                                type="add"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                // onBlur={handleBlur('email')}
                            />
                            {touched.email && errors.email && (
                                <Text style={styles.errorText}>{errors.email}</Text>
                            )}
                        </View>
                        <View>
                            <SubmitButton
                                title="Add Beneficiar"
                                onPress={handleSubmit}
                                disabled={
                                    !values.firstName ||
                                    !values.lastName ||
                                    !values.bankBranch ||
                                    !values.accountNumber ||
                                    !values.phoneNumber ||
                                    !values.email ||
                                    Object.keys(errors).length > 0
                                }
                            />
                        </View>
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
    },
    innerContainer: {
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    cameraContainer: {
        alignItems: 'center',
        marginBottom: 15,
        marginTop: -19,
    },
    cameraInnerContainer: {
        width: 138,
        height: 138,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    name: {
        width: 165,
        height: 60,
    },
    errorText: {
        color: 'red',
        marginLeft: 5,
        marginTop: -10,
        marginBottom: 10,
    },
});

export default AddBen;
