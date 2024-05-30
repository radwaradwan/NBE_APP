import React,{useState} from 'react';
import {StatusBar, StyleSheet, View,Text} from 'react-native';
// import VisaRow from '../Molecules/VisaRow';
import SubmitButton from '../Atoms/SubmitButton';
import ModalApp from '../Atoms/ModalApp';
import { getTheme } from '../Storage/mmkv';
import { theme } from '../theme/theme';
import TestDraggable from '../Molecules/TestDraggable';
type Props = {
navigation:any,
};
function AirPay(props:Props){
    const {navigation} = props;
    const [showModal,setShowModal] = useState<boolean>(false);
    const currentTheme = getTheme(); // Get the current theme
    const isDarkTheme = currentTheme === 'Dark';
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle={isDarkTheme ? 'light-content' : 'dark-content'}/>
            <Text style={styles.text}>Cards</Text>
            {/* <VisaRow/> */}
            <TestDraggable/>
            <View style={styles.dashedSquareContainer}>
                <View style={styles.dashedSquare}>
                    <Text style={styles.dashedSquareText}>Touch & hold a card then drag it to this box</Text>
                </View>
            </View>
            <View>
                <SubmitButton title="Pay Now" onPress={()=>setShowModal(!showModal)} iconRight={require('../../Assets/images/fingerPrint.png')} type="airpay"/>
                {/* <Image source={require('../../Assets/images/fingerPrint.png')}/> */}
                    {showModal && <ModalApp
                    navigation={navigation}
                    modalVisible={showModal}
                    setModalVisible={setShowModal}
                    path={require('../../Assets/images/airpayComplete.png')}
                    titleText="Mission Complete"
                    descriptionText="Your payment to IKEA was successful"
                    money="$5,542.00"
                    screenName="airpay"
                    confirmButtonText="confirm"
                    // cancelButtonText="cancel"
                    />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
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
dashedSquareContainer:{
alignItems:'center',
},
dashedSquare: {
    marginTop:30,
    marginBottom:20,
    width: 350,
    height: 210,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 20,
    borderColor: '#007236',
    alignItems: 'center',
    justifyContent: 'center',
},
dashedSquareText:{
    color:'#007236',
    fontSize:15,
},

});
export default AirPay;
