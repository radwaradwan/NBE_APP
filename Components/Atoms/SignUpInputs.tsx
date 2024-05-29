import React, {useState} from 'react';
import { TextInput,View , Text, StyleSheet, Image, Pressable} from 'react-native';
import { theme } from '../theme/theme';
type Props={
    placeholder?:string,
    title:string,
    path?:any,
    type?:string,
    value?:string,
    onChangeText?: (text: string) => void,
};

function SignUpInputs(props: Props){
    const {placeholder,title,path,type,value,onChangeText} = props;
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

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
                        // value={type === 'phone number' ? phoneNumber : undefined}
                        value={value}
                        // onChangeText={type === 'phone number' ? handlePhoneNumberChange : undefined}
                        onChangeText={onChangeText}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        maxLength={type === 'phone number' ? 11 : 28}
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
        backgroundColor: theme.BackgroundNav,
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
        color:theme.textColor,
        marginRight:-20,
        marginLeft:20,
        marginTop:2,
    },
    text:{
        color:theme.textColor,
        fontWeight:'bold',
        fontSize:14,
        // paddingHorizontal:16,
    },
    boldText:{
        fontWeight:'bold',
        color:theme.textColor,
        fontSize:14,
        paddingHorizontal:22,
    },
    focusedText:{
        color:'#007236',
        fontSize:14,
        // paddingHorizontal:20,
    },
    placeholder:{
        // color:'#000',
        color:theme.textColor,
        paddingTop:0,
        paddingLeft:-1,
        width:250,
    },
    placeholderwithoutIcon:{
        color:theme.textColor,
        paddingTop:0,
        paddingLeft:20,
    },
    inputIconContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    eyeIcon:{
        width: 20,
        height: 20,
        tintColor: 'gray',
        // marginLeft: 50,
    },
});
export default SignUpInputs;
