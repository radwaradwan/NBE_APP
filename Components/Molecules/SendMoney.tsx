import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import Settings from '../Atoms/Settings';
import SendMoneyCard from '../Atoms/SendMoneyCard';
function SendMoney() {
    const person1 = require('../../Assets/images/person1.png');
    const person2 = require('../../Assets/images/person2.png');
    const person3 = require('../../Assets/images/person3.png');
    return (
        <View>
            <Text style={styles.text}>Send money</Text>
            <ScrollView contentContainerStyle={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <SendMoneyCard  text="Ayman" path={person1}/>
                <SendMoneyCard text="Alex" path={person2}/>
                <SendMoneyCard  text="Soha" path={person3}/>
                <SendMoneyCard  text="Ayman" path={person1}/>
                <SendMoneyCard text="Alex" path={person2}/>
                <SendMoneyCard  text="Soha" path={person3}/>
                <SendMoneyCard  text="Ayman" path={person1}/>
                <SendMoneyCard text="Alex" path={person2}/>
                <SendMoneyCard  text="Soha" path={person3}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
},
text:{
    color:'#000',
    fontSize:19,
    fontWeight:'bold',
    marginBottom:5,
},
});
export default SendMoney;

