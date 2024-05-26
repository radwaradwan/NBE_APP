import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import SignUpNav from '../Molecules/SignUpNav';
import SignUpInputs from '../Atoms/SignUpInputs';
import DropdownMenu from '../Atoms/DropdownMenu';
import SubmitButton from '../Atoms/SubmitButton';


const bankBranch = [
    { label: '001 - Main Branch', value: '1' },
    { label: '065 - City Stars Mall', value: '2' },
    { label: '127 - Mall of Arabia', value: '3' },
];



function AddBen() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <SignUpNav/>
                    <View style={styles.cameraContainer}>
                        <View style={styles.cameraInnerContainer}>
                            <Image source={require('../../Assets/images/camera.png')}/>
                        </View>
                    </View>
                    <View style={styles.nameContainer}>
                        <View style={styles.name}>
                            <SignUpInputs title="First name" type="add"/>
                        </View>
                        <View style={styles.name}>
                            <SignUpInputs title="Last name" type="add"/>
                        </View>
                    </View>
                    <DropdownMenu options={bankBranch} title="Bank branch"/>
                    <SignUpInputs title="Account number" type="add"/>
                    <SignUpInputs title="Phone number" type="add"/>
                    <SignUpInputs title="Email" type="add"/>
                </View>
                <View>
                    <SubmitButton title="Add Beneficiar" onPress={()=> console.log('123')}/>
                </View>

            </View>
            {/* <Input/>
            <SignUpInputs placeholder="enter" title="login" type="ben"/>
            {/* <View style={styles.menuContainer}> */}
                {/* <Text style={styles.text}>hello</Text> */}
            {/* <DropdownMenu options={typeofTransfer} title="hello"/>
            {/* </View> */}
            {/* <Input/>   */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F1F3FB',
    },
    innerContainer:{
        marginHorizontal:20,
        justifyContent:'space-between',
    },
    cameraContainer:{
        alignItems:'center',
        marginBottom:15,
    },
    cameraInnerContainer:{
        width:138,
        height:138,
        borderRadius:30,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
    },
    name:{
        width:165,
        height:60,
    },
});

export default AddBen;
