import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
type Props ={
    name:string,
    path:any,
    date:string,
    text:string,
    type:string,
};
function HistoryRow(props:Props) {
    const {name,path,text,date,type} = props;
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={path}/>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text>{date}</Text>
                    {type === 'ben' && <Text>{text}</Text>}
                </View>
            </View>
            {type === 'home' && <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>}
        </View>
    );
}
const styles = StyleSheet.create({
    outerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },
innerContainer:{
flexDirection:'row',
},
nameContainer:{
marginStart:10,
},
name:{
color:'#000',
fontSize:18,
},
textContainer:{
justifyContent:'center',
},
text:{
    color:'#000',
    fontSize:20,
    fontWeight:'bold',
},
});
export default HistoryRow;
