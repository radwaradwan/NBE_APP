import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SignUpNav from '../Molecules/SignUpNav';
import SignUpText from '../Atoms/SignUpText';
import SignUpInputs from '../Atoms/SignUpInputs';
import SubmitButton from '../Atoms/SubmitButton';
import PasswordValidation from '../Atoms/PasswordValidation';
import { theme } from '../theme/theme';

type Props = {
    navigation: any,
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .matches(/[a-z]/, 'Must include a lower case letter')
        .matches(/[A-Z]/, 'Must include an upper case letter')
        .matches(/[0-9]/, 'Must include a number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must include a special character')
        .min(8, 'Must be at least 8 characters long')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});

function SignUpPasswordScreen(props: Props) {
    const { navigation } = props;

    const navigateToSignUpCongratScreen = () => {
        console.log('hello1');
        navigation.navigate('signupcongrat');
        console.log('hello2');
    };

    return (
        <KeyboardAvoidingView style={styles.outerContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={navigateToSignUpCongratScreen}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <>
                        <View style={styles.innerContainer}>
                            <SignUpNav screenName="otp" navigation={navigation} />
                            <SignUpText text1="Set your password" text2="Enter a strong password for your online banking account" />
                            <SignUpInputs
                                placeholder="write your password"
                                title="Password"
                                path={require('../../Assets/images/password.png')}
                                type="password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                            />
                            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                            <SignUpInputs
                                placeholder="Re-Write your password here"
                                title="Confirm Password"
                                path={require('../../Assets/images/password.png')}
                                type="password"
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                            />
                            {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                            <View style={styles.validationContainer}>
                                <View>
                                    <PasswordValidation text="Lower case letter" isValid={/[a-z]/.test(values.password)} />
                                    <PasswordValidation text="Minimum 8 characters" isValid={values.password.length >= 8} />
                                    <PasswordValidation text="Special character" isValid={/[!@#$%^&*(),.?":{}|<>]/.test(values.password)} />
                                </View>
                                <View>
                                    <PasswordValidation text="Upper case letter" isValid={/[A-Z]/.test(values.password)} />
                                    <PasswordValidation text="Number" isValid={/[0-9]/.test(values.password)} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.innerContainer}>
                            <SubmitButton
                                title="Submit"
                                onPress={handleSubmit}
                                disabled={Object.keys(errors).length > 0 || values.password === '' || values.confirmPassword === ''}
                            />
                        </View>
                    </>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        // backgroundColor: '#F1F3FB',
        backgroundColor:theme.BackgroundScreen,
        justifyContent: 'space-between',
        height: '100%',
    },
    innerContainer: {
        margin: 20,
    },
    validationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    errorText: {
        color: 'red',
        marginLeft: 20,
        marginTop: -10,
        marginBottom: 10,
    },
});

export default SignUpPasswordScreen;
