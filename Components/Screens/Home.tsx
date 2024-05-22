import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
// import TopNav from '../Molecules/TopNav';
import BalanceCard from '../Atoms/BalanceCard';
import SettingsRow from '../Molecules/SettingsRow';
import SendMoney from '../Molecules/SendMoney';
import History from '../Molecules/History';
// import BottomTabNavigator from '../Molecules/BottomTabNav';
type Props = {
    navigation:any,
};
function Home(props:Props){
    const {navigation} = props;
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            {/* <TopNav/> */}
            <BalanceCard navigation={navigation}/>
            <SettingsRow/>
            <SendMoney/>
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
    // backgroundColor:'#F5F5F5',
    backgroundColor:'#F1F3FB',
},
historyContainer:{
height:200,
},
});
export default Home;
