import React, {useState} from 'react';
import { TextInput,View , Text, StyleSheet, Image, Pressable} from 'react-native';

type Props={
    placeholder:string,
    title:string,
    path:any,
    type:string
};

function SignUpInputs(props: Props){
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
            <View>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.inputIconContainer}>
                    <TextInput style={styles.placeholder} placeholder={placeholder} placeholderTextColor="#000" secureTextEntry={type === 'password' && !isPasswordVisible}/>
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
        backgroundColor: '#fff',
        borderRadius:10,
        height:70,
        borderColor: '#007236',
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
        color:'#007236',
        fontSize:18,
        // marginTop:1,
    },
    placeholder:{
        color:'#000',
        paddingTop:0,
    },
    inputIconContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
    },
    eyeIcon:{
        width: 20,
        height: 20,
        tintColor: '#000',
        marginLeft: 50,
    },
});
export default SignUpInputs;
