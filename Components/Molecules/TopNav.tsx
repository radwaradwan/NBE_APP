import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';
import { getUsername , getPhoneNumber} from '../Storage/mmkv';
// import { TouchableOpacity } from 'react-native-gesture-handler';
type Props = {
    type:string,
};
function TopNav(props:Props) {
    const {type} = props;
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                {/* <View style={styles.menuIcon}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image style={styles.icon} source={require('../../Assets/images/menuIcon.png')}/>
                    </TouchableOpacity>
                </View> */}
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={require('../../Assets/images/man.png')}/>
                    </View>
                    <View style={styles.nameContainer}>
                        {type === 'menu' ? (<Text style={styles.name}>{getUsername()}</Text>) : (<Text style={styles.GM}>Good Morning</Text>)}
                        {type === 'menu' ? (<Text style={styles.GM}>{getPhoneNumber()}</Text>) : (<Text style={styles.name}>{getUsername()}</Text>)}
                    </View>
                </View>
            </View>
            {/* <View style={styles.textContainer}>
                <Image source={require('../../Assets/images/bell.png')}/>
            </View> */}
        </View>
    );
}
const styles = StyleSheet.create({
    outerContainer:{
        // flexDirection:'row',
        // justifyContent:'space-between',
        // backgroundColor:'#F1F3FB',
        // marginTop:30,
        // marginBottom:20,
    },
    // menuIcon:{
    //         justifyContent:'center',
    //         marginEnd:10,
    // },
    // icon:{
    //     width:20,
    //     height:20,
    // },
innerContainer:{
flexDirection:'row',
},
nameContainer:{
marginStart:10,
},
GM:{
// color:'#000',
color:theme.textColor,
},
// textContainer:{
// justifyContent:'center',
// },
name:{
    fontWeight:'bold',
    fontSize:15,
    // color:'#000',
    color:theme.textColor,
},
});
export default TopNav;
