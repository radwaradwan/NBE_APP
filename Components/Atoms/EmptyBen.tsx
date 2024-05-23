import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GridListButton from './GridListButton';

function EmptyBen (){
    return (
        <View style= {styles.emptyContainer}>
                        <Image source={require('../../Assets/images/emptyben.png')}/>
                        <Text style={styles.noBen}>No Beneficiaries</Text>
                        <Text style={styles.emptyDetails}>You don&#39;t have beneficiaries, add</Text>
                        <Text style={styles.emptyDetails}>some so you can send money</Text>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <GridListButton
                                    path={require('../../Assets/images/plus.png')}
                                    type="addinempty"
                            />
                            <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
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
        color:'#000',
        fontWeight:'bold',
        fontSize:18,
    },
    emptyDetails:{
        color:'#000',
    },
    addText:{
        color:'white',
    },

});

export default EmptyBen;
