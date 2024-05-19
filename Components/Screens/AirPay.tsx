import React,{useState} from 'react';
import {StatusBar, StyleSheet, View,Text} from 'react-native';
import TopNav from '../Molecules/TopNav';
import VisaRow from '../Molecules/VisaRow';
import SubmitButton from '../Atoms/SubmitButton';
import ModalApp from '../Atoms/ModalApp';
// import BottomTabNavigator from '../Molecules/BottomTabNav';
type Props = {
navigation:any,
};
function AirPay(props:Props){
    const {navigation} = props;
    const [showModal,setShowModal] = useState<boolean>(false);
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            <TopNav/>
            <Text style={styles.text}>Cards</Text>
            <VisaRow/>
            <View style={styles.dashedSquareContainer}>
                <View style={styles.dashedSquare}>
                    <Text style={styles.dashedSquareText}>Touch & hold a card then drag it to this box</Text>
                </View>
            </View>
            <View>
                <SubmitButton title="Pay Now" onPress={()=>setShowModal(!showModal)} iconRight={require('../../Assets/images/fingerPrint.png')}/>
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
dashedSquareContainer:{
alignItems:'center',
},
dashedSquare: {
    marginTop:40,
    marginBottom:30,
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
// buttonContainer:{
// flexDirection:'row',
// alignItems:'center',
// },
});
export default AirPay;
