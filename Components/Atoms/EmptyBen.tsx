import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GridListButton from './GridListButton';
import { theme } from '../theme/theme';
type Props = {
path:any,
title:string,
text1:string,
text2:string,
type:string,
};
function EmptyBen (props:Props){
    const {path,title,text1,text2,type} = props;
    return (
        <View style= {styles.emptyContainer}>
                        <Image source={path}/>
                        <Text style={styles.noBen}>{title}</Text>
                        <Text style={styles.emptyDetails}>{text1}</Text>
                        <Text style={styles.emptyDetails}>{text2}</Text>
                        {type === 'ben' && <TouchableOpacity style={styles.buttonContainer}>
                            <GridListButton
                                    path={require('../../Assets/images/plus.png')}
                                    type="addinempty"
                            />
                            <Text style={styles.addText}>Add</Text>
                        </TouchableOpacity>}
                    </View>
    );

}

const styles = StyleSheet.create({
    emptyContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#007236',
        padding: 3,
        borderRadius: 25,
        width:61,
        height:30,
        marginTop:10,
    },
    noBen:{
        color:theme.textColor,
        fontWeight:'bold',
        fontSize:18,
    },
    emptyDetails:{
        color:theme.textColor,
    },
    addText:{
        color:'white',
    },

});

export default EmptyBen;
