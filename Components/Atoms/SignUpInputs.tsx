import React, {useState} from 'react';
import { TextInput,View , Text, StyleSheet, Image, Pressable} from 'react-native';

type Props={
    placeholder?:string,
    title:string,
    path?:any,
    type?:string
};

function SignUpInputs(props: Props){
    const {placeholder,title,path,type} = props;
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('+2');
    const [isFocused, setIsFocused] = useState(false);

// Handle phone number change
    const handlePhoneNumberChange = (input: string) => {
        // Check if input is empty
        if (input === '' || input === '+') {
            // If input is empty, maintain the '+2' prefix
            setPhoneNumber('+2');
        }
        else {
            // Ensure the numeric value is not longer than 11 characters (13 total characters including '+2')
            const formattedValue = input.substring(0, 13);
            // Update the phone number state with the '+2' prefix and the formatted numeric value
            setPhoneNumber( formattedValue);
        }
    };
    // toggle password visibility
    const togglePasswordVisibility = ()=>{
        setIsPasswordVisible(prevState => !prevState);
    };
    return(
        <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
            {path && <View style={styles.imgContainer}>
                <Image source={path}  alt="hhhhhh"/>
            </View>}
            <View>
                <Text style={[
                    styles.text,
                    (type === 'transfer' || type === 'add') && styles.boldText,
                    isFocused && styles.focusedText]}>
                    {title}
                </Text>
                    <View style={styles.inputwithDollar}>
                    {type === 'transfer' && <Text style={styles.dollar}>$</Text>}
                    <View style={styles.inputIconContainer}>
                        <TextInput style={path ? styles.placeholder : styles.placeholderwithoutIcon}
                        placeholder={placeholder}
                        placeholderTextColor="gray"
                        secureTextEntry={type === 'password' && !isPasswordVisible}
                        keyboardType={type === 'phone number' || type === 'transfer' ? 'phone-pad' : 'default'}
                        value={type === 'phone number' ? phoneNumber : undefined}
                        onChangeText={type === 'phone number' ? handlePhoneNumberChange : undefined}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        // maxLength={type === 'phone number' ? 13 : 28}
                        />
                        {type === 'password' && (
                            <Pressable onPress={togglePasswordVisibility}>
                                <Image
                                    source={isPasswordVisible ? require('../../Assets/images/eye.png') : require('../../Assets/images/eye_close.png')}
                                    style={styles.eyeIcon}
                                />
                            </Pressable>
                        )}
                    </View>
                    </View>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius:10,
        height:65,
        borderColor: 'transparent',
        borderWidth:1,
        marginBottom:12,
        paddingTop:5,
    },
    inputContainerFocused: {
        borderColor: '#007236',
    },
    imgContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:20,
    },
    inputwithDollar:{
        flexDirection:'row',
    },
    dollar:{
        fontSize: 16,
        color:'#000',
        marginRight:-20,
        marginLeft:20,
        marginTop:2,
    },
    text:{
        color:'#000',
        fontWeight:'bold',
        fontSize:14,
        // paddingHorizontal:16,
    },
    boldText:{
        fontWeight:'bold',
        color:'#000',
        fontSize:14,
        paddingHorizontal:22,
    },
    focusedText:{
        color:'#007236',
        fontSize:14,
        // paddingHorizontal:20,
    },
    placeholder:{
        color:'#000',
        paddingTop:0,
        paddingLeft:-1,
    },
    placeholderwithoutIcon:{
        color:'#000',
        paddingTop:0,
        paddingLeft:20,
    },
    inputIconContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // flex:1,
    },
    eyeIcon:{
        width: 20,
        height: 20,
        tintColor: 'gray',
        // marginLeft: 50,
    },
});
export default SignUpInputs;
