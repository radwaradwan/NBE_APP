import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
type Props ={
    path:any,
    text:string,
};
function SendMoneyCard(props:Props) {
    const {path,text} = props;
    return (
        <View style={styles.container} >
            <Image style={styles.img} source={path}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
container:{
borderRadius:12,
backgroundColor:'#fff',
width:80,
height:90,
alignItems:'center',
marginEnd:20,
},
text:{
    textAlign:'center',
    color:'#000',
},
img:{
width:120,
height:120,
marginTop:-25,
marginBottom:-40,
},
});
export default SendMoneyCard;
