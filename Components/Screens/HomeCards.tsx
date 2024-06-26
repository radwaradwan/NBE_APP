import React from 'react';
import {StatusBar, StyleSheet, View,Text} from 'react-native';
// import TopNav from '../Molecules/TopNav';
import History from '../Molecules/History';
import VisaRow from '../Molecules/VisaRow';
// import BottomTabNavigator from '../Molecules/BottomTabNav';
import { theme } from '../theme/theme';
import { getTheme } from '../Storage/mmkv';
function HomeCards(){
    const currentTheme = getTheme(); // Get the current theme
    const isDarkTheme = currentTheme === 'Dark';
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle={isDarkTheme ? 'light-content' : 'dark-content'}/>
            {/* <TopNav/> */}
            <Text style={styles.text}>Cards</Text>
            <VisaRow/>
            <View style={styles.historyContainer}>
                <History/>
            </View>
            {/* <BottomTabNavigator/> */}
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    padding:10,
    // backgroundColor:'#F1F3FB',
    backgroundColor:theme.BackgroundScreen,
},
text:{
    color:'#000',
    fontSize:19,
    fontWeight:'bold',
    marginVertical:10,

},
historyContainer:{
    height:350,
    },
});
export default HomeCards;
