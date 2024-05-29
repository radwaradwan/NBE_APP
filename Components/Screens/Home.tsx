import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import BalanceCard from '../Atoms/BalanceCard';
import SettingsRow from '../Molecules/SettingsRow';
import SendMoney from '../Molecules/SendMoney';
import History from '../Molecules/History';
import { theme } from '../theme/theme';
import { getTheme } from '../Storage/mmkv';
type Props = {
    navigation:any,
};
function Home(props:Props){
    const {navigation} = props;
    const currentTheme = getTheme(); // Get the current theme
    const isDarkTheme = currentTheme === 'Dark';
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle={isDarkTheme ? 'light-content' : 'dark-content'}/>
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
    // backgroundColor:'#F1F3FB',
    backgroundColor: theme.BackgroundScreen,
},
historyContainer:{
height:200,
},
});
export default Home;
