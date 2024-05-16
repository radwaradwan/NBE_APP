import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import Visa from '../Atoms/Visa';
function VisaRow(){

    return(
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Visa amount="$125,381.15" cardNum={6506} name="AHMAD SAMI AL-SAYED" date="08/25" cvv={123} visaColor="green"/>
            <Visa amount="$125,381.15" cardNum={6506} name="AHMAD SAMI AL-SAYED" date="08/25" cvv={123} visaColor="red"/>
            <Visa amount="$125,381.15" cardNum={6506} name="AHMAD SAMI AL-SAYED" date="08/25" cvv={123} visaColor="green"/>
            <Visa amount="$125,381.15" cardNum={6506} name="AHMAD SAMI AL-SAYED" date="08/25" cvv={123} visaColor="red"/>
            <Visa amount="$125,381.15" cardNum={6506} name="AHMAD SAMI AL-SAYED" date="08/25" cvv={123} visaColor="green"/>
            <Visa amount="$125,381.15" cardNum={6506} name="AHMAD SAMI AL-SAYED" date="08/25" cvv={123} visaColor="red"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
container:{
    // padding:10,
},
});
export default VisaRow;
