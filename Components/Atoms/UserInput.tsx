import React from 'react';
import { TextInput,View , Text, StyleSheet, Image} from 'react-native';

type Props={
    placeholder:string,
    title:string,
    path:any
};
function UserInput(props: Props){
    const {placeholder,title,path} = props;
    return(
        <View style={styles.inputContainer}>
            <View style={styles.imgContainer}>
                <Image source={path}  alt="hhhhhh"/>
            </View>
            <View style={styles.textInput}>
                <Text style={styles.text}>{title}</Text>
                <TextInput style={styles.placeholder} placeholder={placeholder} placeholderTextColor="#fff"/>
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
        marginHorizontal:10,
        borderWidth:1,
        // paddingBottom:1,
        // paddingTop:2,
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
});
export default UserInput;
