import React from 'react';
import {ScrollView, Text,StyleSheet} from 'react-native';
import HistoryRow from '../Atoms/HistoryRow';
import { View } from 'react-native';
function History() {
    const car = require('../../Assets/images/carrefour.png');
    const amazon = require('../../Assets/images/amazon.png');
    const jumia = require('../../Assets/images/jumia.png');
    const hala = require('../../Assets/images/hala.png');
    const ikea = require('../../Assets/images/ikea.png');
    return (
        <View>
            <Text style={styles.text}>History</Text>
            <ScrollView style={styles.container}>
                <HistoryRow name="Carrefour" path={car} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Amazon" path={amazon} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Jumia" path={jumia} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Hala Slimen" path={hala} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="IKEA" path={ikea} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Carrefour" path={car} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Amazon" path={amazon} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Jumia" path={jumia} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Hala Slimen" path={hala} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="IKEA" path={ikea} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Carrefour" path={car} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Amazon" path={amazon} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Jumia" path={jumia} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="Hala Slimen" path={hala} date="20-2-2024" text="$50.25" type="home"/>
                <HistoryRow name="IKEA" path={ikea} date="20-2-2024" text="$50.25" type="home"/>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        // height:200,
    },
    text:{
        color:'#000',
        fontSize:19,
        fontWeight:'bold',
        marginBottom:5,
    },
});
export default History;
