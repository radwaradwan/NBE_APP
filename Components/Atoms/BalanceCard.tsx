import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { View ,ImageBackground} from 'react-native';
type Props = {
navigation:any,
};
function BalanceCard(props:Props){
    const {navigation} = props;
    const navigateToHomeCardsScreen = () => {
        console.log('hello1');
        navigation.navigate('homeCards'); // Navigate to 'otp' screen
        console.log('hello2');
    };
    return(
        <Pressable onPress={navigateToHomeCardsScreen}>
            <ImageBackground style={styles.container}source={require('../../Assets/images/balanceCard.png')}>
                <View style={styles.cardRow}>
                    <Text style={styles.text}>Balance</Text>
                    <Image source={require('../../Assets/images/register.png')}/>
                </View>
                <Text style={[styles.text,styles.amount]}>$2,374,654.25</Text>
                </ImageBackground>
        </Pressable>

    );
}

const styles = StyleSheet.create({
container:{
    marginVertical:20,
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
