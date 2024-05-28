import React from 'react';
import { StyleSheet, StatusBar, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SignUpInputs from '../Atoms/SignUpInputs';
import SubmitButton from '../Atoms/SubmitButton';
import SignUpNav from '../Molecules/SignUpNav';
import SignUpText from '../Atoms/SignUpText';

type Props = {
    navigation: any,
};

const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .matches(/[0-9]{11}$/, 'Phone number is not valid')
        .required('Phone number is required'),
});

function SignUpMobileScreen(props: Props) {
    const { navigation } = props;

    const navigateToSignUpOtpScreen = () => {
        console.log('hello1');
        navigation.navigate('otp');
        console.log('hello2');
    };
    return (
        <KeyboardAvoidingView style={styles.outerContainer} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Formik
                initialValues={{ phoneNumber: '' }}
                validationSchema={validationSchema}
                onSubmit={navigateToSignUpOtpScreen}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <>
                        <View style={styles.innerContainer}>
                            <StatusBar translucent backgroundColor="transparent" />
                            <SignUpNav screenName="login" navigation={navigation} />
                            <SignUpText text1="Mobile number" text2="Enter the mobile number registered in the bank" />
                            <SignUpInputs
                                placeholder="enter your mobile number"
                                title="Mobile number"
                                path={require('../../Assets/images/mobile.png')}
                                type="phone number"
                                onChangeText={handleChange('phoneNumber')}
                                // onBlur={handleBlur('phoneNumber')}
                                value={values.phoneNumber}
                            />
                            {touched.phoneNumber && errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
                        </View>
                        <View style={styles.innerContainer}>
                            {/* !values.phoneNumber if there is no value in phine number  !! to convert it to boolean*/}
                            <SubmitButton title="Next" onPress={handleSubmit} disabled={ !values.phoneNumber || !!errors.phoneNumber } />
                            <Text style={styles.text}>
                                By signing up, you agree to our <Text style={styles.boldText}>Terms of Service</Text> and acknowledge that you have read our <Text style={styles.boldText}>Privacy Policy</Text>.
                            </Text>
                        </View>
                    </>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: '#F1F3FB',
        justifyContent: 'space-between',
        height: '100%',
    },
    innerContainer: {
        margin: 20,
    },
    text: {
        marginBottom: 10,
        fontSize: 14,
    },
    boldText: {
        fontWeight: '500',
        color: '#000',
    },
    errorText: {
        color: 'red',
        marginLeft: 20,
        marginTop: -10,
        marginBottom: 10,
    },
});

export default SignUpMobileScreen;
