import React from 'react';
import { Image, View,Text, StyleSheet } from 'react-native';

type iconProps = {
text:string,
path:any,
};
function BottomTabIcon(props:iconProps){
    const {text,path} = props;
    return(
        <View >
            <View>
                <Image style={styles.container} source={path} alt="hh"/>
                <Text>{text}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
container:{
    tintColor:'#fff',
},
});
export default BottomTabIcon;
