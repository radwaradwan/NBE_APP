import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';
type Props ={
    name:string,
    path?:any,
    date:string,
    text:string,
    type?:string,
};
function HistoryRow(props:Props) {
    const {name,path,text,date,type} = props;
    return (
        <View style={type === 'ben' ? styles.benOuterContainer : styles.hisOuterContainer}>
            <View style={styles.innerContainer}>
                {path && <View>
                    <Image source={path} style={type === 'ben' ? styles.img : undefined}/>
                </View>}
                <View style={path && styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.date}>{date}</Text>
                    {type === 'ben' && <Text style={styles.amount}>{text}</Text>}
                </View>
            </View>
            {type === 'home' && <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>}
        </View>
    );
}
const styles = StyleSheet.create({
    hisOuterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },
    benOuterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        // backgroundColor:'white',
        backgroundColor:theme.BackgroundNav,
        borderRadius:15,
        marginBottom:10,
    },
innerContainer:{
flexDirection:'row',
},
nameContainer:{
marginStart:10,
},
name:{
// color:'#000',
color:theme.textColor,
fontSize:18,
},
textContainer:{
justifyContent:'center',
},
text:{
    // color:'#000',
    color:theme.textColor,
    fontSize:20,
    fontWeight:'bold',
},
amount:{
    color:theme.textColorGrey,
},
date:{
color:theme.textColorGrey,
},
img:{
    width:59,
    height:59,
},
});

export default HistoryRow;
