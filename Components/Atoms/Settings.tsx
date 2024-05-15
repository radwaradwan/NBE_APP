import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
type Props ={
    color:string,
    path:any,
    text:string,
};
function Settings(props:Props) {
    const {color,path,text} = props;
    return (
        <View >
            <View style={[styles.container,{backgroundColor:color}]}>
                <Image source={path}/>
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
container:{
borderRadius:12,
padding:10,
width:60,
height:60,
alignItems:'center',
justifyContent:'center',
},
text:{
    textAlign:'center',
    color:'#000',
},
});
export default Settings;
