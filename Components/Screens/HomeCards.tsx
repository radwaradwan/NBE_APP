import React from 'react';
import {StatusBar, StyleSheet, View,Text} from 'react-native';
// import TopNav from '../Molecules/TopNav';
import History from '../Molecules/History';
import VisaRow from '../Molecules/VisaRow';
// import BottomTabNavigator from '../Molecules/BottomTabNav';
function HomeCards(){

    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
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
