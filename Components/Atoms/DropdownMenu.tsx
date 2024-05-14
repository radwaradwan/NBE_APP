import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

type DropdownProps ={
    options: string[];
    onSelect: (option: string) => void;
};

function DropdownMenu(props:DropdownProps){
    const {options,onSelect} = props;
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    return (
        <View style={styles.container}>
        <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => {
            setSelectedOption(itemValue);
            onSelect(itemValue);
            }}
        >
            {options.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
            ))}
        </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
});

export default DropdownMenu;
