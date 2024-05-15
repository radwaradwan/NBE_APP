import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function TopNav() {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.menuIcon}>
                    <Image style={styles.icon} source={require('../../Assets/images/menuIcon.png')}/>
                </View>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={require('../../Assets/images/man.png')}/>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.GM}>Good morning</Text>
                        <Text style={styles.name}>Mina</Text>
                    </View>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Image source={require('../../Assets/images/bell.png')}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    outerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    menuIcon:{
            justifyContent:'center',
            marginEnd:10,
    },
    icon:{
        width:20,
        height:20,
    },
innerContainer:{
flexDirection:'row',
},
nameContainer:{
marginStart:10,
},
GM:{
color:'#000',
},
textContainer:{
justifyContent:'center',
},
name:{
    fontWeight:'bold',
    color:'#000',
},
});
export default TopNav;
