import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DropdownMenu from '../Atoms/DropdownMenu';

type AccordionProps = {
    title: string;
    options: string[];
};

function Accordion(props:AccordionProps){
    const {title,options} = props;
    const [expanded, setExpanded] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.dropdown}>
                    <DropdownMenu options={options} onSelect={setSelectedOption} />
                    {selectedOption && <Text>Selected option: {selectedOption}</Text>}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    header: {
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {
        marginTop: 5, // Adjust this value to control the distance between the header and the dropdown
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default Accordion;
