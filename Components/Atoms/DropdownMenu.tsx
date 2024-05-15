import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
//   import AntDesign from '@expo/vector-icons/AntDesign';
type Option = {
    label: string,
    value: string,
};
type dropDownProps = {
    // title: string,
    options: Option[]
};
function DropdownMenu(props:dropDownProps) {
    const {options} = props;
    const [value, setValue] = useState<string>(' ');
    const [pressed,setPressed] = useState<boolean>(false);

    return (
        <View style={pressed && styles.mainContainerPressed}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                containerStyle={styles.menuContainer}
                data={options}
                itemTextStyle={styles.itemText}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Option"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                onFocus={() => setPressed(true)} // Set pressed to true when dropdown is focused
                onBlur={() => setPressed(false)}
            />
        </View>
        );
}

export default DropdownMenu;

const styles = StyleSheet.create({
    mainContainerPressed:{
        height:250,
    },
dropdown: {
    marginHorizontal: 16,
    height: 50,
},
menuContainer:{
    marginTop:0,
    marginHorizontal:0,
    backgroundColor:'#fff',
    borderRadius:10,
    borderColor:'#0f0',
    borderWidth:1,
},
icon: {
    marginRight: 5,
},
placeholderStyle: {
    fontSize: 16,
    fontWeight:'bold',
    color:'#000',
},
selectedTextStyle: {
    fontSize: 16,
    fontWeight:'bold',
    color:'#000',
},
iconStyle: {
    width: 30,
    height: 30,
},
itemText:{
color:'#000',
},
});
