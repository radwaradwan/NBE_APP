import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { View ,ImageBackground} from 'react-native';
function BalanceCard(){
    return(
        <ImageBackground style={styles.container}source={require('../../Assets/images/balanceCard.png')}>
                <View style={styles.cardRow}>
                    <Text style={styles.text}>Balance</Text>
                    <Image source={require('../../Assets/images/register.png')}/>
                </View>
                <Text style={[styles.text,styles.amount]}>$2,374,654.25</Text>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
container:{
    margin:10,
width:374,
height:132,
},
text:{
    color:'#fff',
},
cardRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15,
},
amount:{
textAlign:'center',
fontSize:25,
},
});
export default BalanceCard;
