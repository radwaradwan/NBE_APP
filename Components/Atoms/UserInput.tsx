import React, {useState} from 'react';
import { TextInput,View , Text, StyleSheet, Image, Pressable, KeyboardAvoidingView} from 'react-native';

type Props={
    placeholder:string,
    title:string,
    path:any,
    type:string,
    onChangeText: (text: string) => void,
    value: string,
};
function UserInput(props: Props){
    const {placeholder,title,path,type,onChangeText,value} = props;
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);
    // toggle password visibility
    const togglePasswordVisibility = ()=>{
        setIsPasswordVisible(prevState => !prevState);
    };
    return(
        <KeyboardAvoidingView style={styles.inputContainer}>
            <View style={styles.imgContainer}>
                <Image source={path}  alt="hhhhhh"/>
            </View>
            <View>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.inputIconContainer}>
                    <TextInput style={styles.placeholder} placeholder={placeholder}
                    placeholderTextColor="#fff" secureTextEntry={type === 'password' && !isPasswordVisible}
                    onChangeText={onChangeText}
                    value={value}/>
                    {type === 'password' && (
                        <Pressable onPress={togglePasswordVisibility} >
                            <Image
                                source={isPasswordVisible ? require('../../Assets/images/eye.png') : require('../../Assets/images/eye_close.png')}
                                style={styles.eyeIcon}
                            />
                        </Pressable>
                    )}
                </View>
            </View>

        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius:10,
        height:70,
        borderColor: '#fff',
        marginHorizontal:20,
        borderWidth:1,
        marginBottom:20,
        paddingTop:5,
    },
    imgContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:20,
    },
    text:{
        color:'#fff',
        fontSize:18,

    },
    placeholder:{
        color:'#fff',
        paddingTop:0,
        paddingLeft:-1,
        width:250,
    },
    inputIconContainer:{
        // flex:1,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-between',
    },
    eyeIcon:{
        width: 20,
        height: 20,
        tintColor: '#fff',
        marginBottom: 10,
    },
});
export default UserInput;
