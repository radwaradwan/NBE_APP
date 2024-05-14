import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
//   import AntDesign from '@expo/vector-icons/AntDesign';

// const data = [
// { label: 'Item 1', value: '1' },
// { label: 'Item 2', value: '2' },
// { label: 'Item 3', value: '3' },
// { label: 'Item 4', value: '4' },
// { label: 'Item 5', value: '5' },
// { label: 'Item 6', value: '6' },
// { label: 'Item 7', value: '7' },
// { label: 'Item 8', value: '8' },
// ];
type Option = {
    label: string,
    value: string,
}
type Props={
    options: Option[],
};

function DropdownMenu (props:Props) {
    const {options} = props;
const [value, setValue] = useState<string>('');

return (
    <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={options}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        // searchPlaceholder="Search..."
        value={value}
        onChange={item => {
        setValue(item.value);
    }}
    // renderLeftIcon={() => (
    //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
    // )}
    />
);
}

export default DropdownMenu;

const styles = StyleSheet.create({
dropdown: {
    margin: 16,
    height: 50,
    // borderBottomColor: '#0f0',
    // borderBottomWidth: 0.5,
},
icon: {
    marginRight: 5,
},
placeholderStyle: {
    fontSize: 16,
},
selectedTextStyle: {
    fontSize: 16,
},
iconStyle: {
    width: 20,
    height: 20,
},
inputSearchStyle: {
    height: 40,
    fontSize: 16,
},
});
