import React from 'react';
import { ImageBackground,View, StyleSheet,Text,Image} from 'react-native';

type visaProp ={
amount:string,
cardNum:number,
visaColor:string,
name:string,
date:string,
cvv:number,
};
function Visa(props:visaProp){
    const {amount,cardNum,visaColor,name,date,cvv} = props;
    return(
        <ImageBackground style={styles.container} source={visaColor ===  'green' ? require('../../Assets/images/GreenCard.png') : require('../../Assets/images/RedCard.png')}>
            <View style={styles.cardRow}>
                <Text style={[styles.amountText , styles.text]}>{amount}</Text>
                <Image source={require('../../Assets/images/VisaText.png')}/>
            </View>
            <View style={styles.cardRow}>
                <View style={styles.cardNumContainer}>
                    <Text style={[styles.text, styles.starText]}>****    ****    ****</Text>
                    <Text style={[styles.text, styles.cardNum]}>{cardNum}</Text>
                </View>
                <View style={styles.cardNumContainer}>
                    <Image source={require('../../Assets/images/SIM.png')}/>
                    <Image style={styles.Sim} source={require('../../Assets/images/Signal.png')}/>
                </View>
            </View>
            <View style={styles.cardRow}>
                <View>
                    <Text style={[styles.text,styles.cardHolder]}>CARD HOLDER</Text>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <View>
                    <Text style={[styles.text,styles.cardHolder]}>EXPIRES</Text>
                    <Text style={styles.text}>{date}</Text>
                </View>
                <View>
                    <Text style={[styles.text,styles.cardHolder]}>CVV</Text>
                    <Text style={[styles.text,styles.cvv]}>{cvv}</Text>
                </View>
            </View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
container:{
    marginBottom:20,
    paddingVertical:20,
    marginEnd:10,
    paddingRight:10,
    paddingLeft:25,
    width:326,
    height:196,
    justifyContent:'space-between',
},
cardRow:{
flexDirection:'row',
justifyContent:'space-between',
// padding:20,

},
text:{
    color:'#fff',
},
amountText:{
    paddingTop:10,
    fontSize:22,
},
cardNumContainer:{
    flexDirection:'row',
},
starText:{
fontSize:18,
},
cardNum:{
    fontSize:20,
    marginStart:5,
},
Sim:{
marginEnd:8,
marginStart:5,
},
cardHolder:{
color:'#848484',
},
cvv:{
marginEnd:20,
},
});
export default Visa;
