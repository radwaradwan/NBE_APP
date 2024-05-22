import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
type Props ={
    path:any,
    text:string,
};
function GridCardBen(props:Props) {
    const {path,text} = props;
    return (
        <View style={styles.container} >
            <Image source={path}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius:18,
        backgroundColor:'#fff',
        width:77,
        height:86,
        alignItems:'center',
        justifyContent:'center',
        marginEnd:8,
        marginVertical:4,
    },
    text:{
        textAlign:'center',
        color:'#000',
        marginTop:5,
    },
});
export default GridCardBen;
