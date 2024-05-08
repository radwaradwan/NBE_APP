import React ,{useState}from 'react';
import {Pressable,Text,StyleSheet,View, Image} from 'react-native';

function RememberMeCheckBox() {
    const [checked, setChecked] = useState(false);

    const handlePress = () => {
        setChecked(!checked);
    };
    return (
    <View style={styles.container}>
        <Pressable style={styles.checkbox} onPress={handlePress}>
        {checked && (
            <View style={styles.checked}>
                <Image source={require('../../Assets/images/check.png')}/>
            </View>
        )}
        </Pressable>
        <Text style={styles.label}>Remember me</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius:5,
    },
    checked: {
    width: 20,
    height: 20,
    borderRadius:5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    },
    label: {
    marginLeft: 10,
    color:'#fff',
    },
});


export default RememberMeCheckBox;
