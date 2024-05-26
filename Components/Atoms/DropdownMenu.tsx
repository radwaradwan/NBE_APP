import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
type Option = {
    label: string,
    value: string,
};
type dropDownProps = {
    title: string,
    options: Option[]
};
function DropdownMenu(props:dropDownProps) {
    const {options,title} = props;
    const [value, setValue] = useState<string>(' ');
    const [pressed,setPressed] = useState<boolean>(false);

    return (
        <View style={[styles.container,pressed && styles.mainContainerPressed]}>
            <Text style={pressed ? styles.pressesText : styles.text}>{title}</Text>
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
        height:270,
    },
    container:{
        backgroundColor:'white',
        padding:10,
        marginBottom:10,
        borderRadius:10,
    },
    text:{
        paddingHorizontal:16,
        color:'#000',
        fontWeight:'bold',
    },
    pressesText:{
        color:'#007236',
        fontWeight:'bold',
        paddingHorizontal:16,
    },
dropdown: {
    marginHorizontal: 16,
    // height: 50,
},
menuContainer:{
    marginTop:0,
    marginHorizontal:0,
    backgroundColor:'#fff',
    borderRadius:10,
    borderColor:'#007236',
    borderWidth:2,
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
