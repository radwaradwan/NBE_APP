import React, {useState} from 'react';
import { TextInput,View , Text, StyleSheet, Image, Pressable} from 'react-native';

type Props={
    placeholder:string,
    title:string,
    path:any,
    type:string
};
function UserInput(props: Props){
    const {placeholder,title,path,type} = props;
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);
    // toggle password visibility
    const togglePasswordVisibility = ()=>{
        setIsPasswordVisible(prevState => !prevState);
    };
    return(
        <View style={styles.inputContainer}>
            <View style={styles.imgContainer}>
                <Image source={path}  alt="hhhhhh"/>
            </View>
            <View style={styles.textInput}>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.inputIconContainer}>
                    <TextInput style={styles.placeholder} placeholder={placeholder} placeholderTextColor="#fff" secureTextEntry={type === 'password' && !isPasswordVisible}/>
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
    },
    imgContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart:20,
    },
    textInput:{
        // paddingVertical:2,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#fff',
        fontSize:18,
        paddingStart:20,
        // marginTop:1,
    },
    placeholder:{
        color:'#fff',
        padding:0,
    },
    inputIconContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    eyeIcon:{
        width: 20,
        height: 20,
        tintColor: '#fff',
        marginLeft: 50,
    },
});
export default UserInput;
