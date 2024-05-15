import React from 'react';
import { StyleSheet, View } from 'react-native';
import Settings from '../Atoms/Settings';

function SettingsRow() {
    const accImg = require('../../Assets/images/accounts.png');
    const cardImg = require('../../Assets/images/cards.png');
    const utilitiesImg = require('../../Assets/images/utilities.png');
    const hisImg = require('../../Assets/images/history.png');
    return (
        <View style={styles.container}>
            <Settings color="#cdede7" text="Accounts" path={accImg}/>
            <Settings color="#cde9fb" text="Cards" path={cardImg}/>
            <Settings color="#f2e8db" text="Utilities" path={utilitiesImg}/>
            <Settings color="#f3cfdd" text="History" path={hisImg}/>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    justifyContent:'space-between',
},
});
export default SettingsRow;

