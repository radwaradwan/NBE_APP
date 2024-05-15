import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DropdownMenu from '../Atoms/DropdownMenu';

type Option = {
    label: string,
    value: string,
}
type AccordionProps = {
    title: string,
    options: Option[]
};

function Accordion(props:AccordionProps){
    const {title,options} = props;
    const [expanded, setExpanded] = useState(true);
    // const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setExpanded(!expanded)} style={[styles.header, expanded && styles.expandedHeader]}>
                <Text style={styles.headerText}>{title}</Text>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.dropdown}>
                    <DropdownMenu options={options} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: '#fff',
        marginBottom: 10,
        // marginHorizontal:20,
        borderRadius:10,
        overflow:'hidden',
        // height:400,
    },
    header: {
        paddingHorizontal: 18,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: '#fff',
    },
    expandedHeader: {
        paddingBottom: 0, // Padding bottom for title when expanded
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#000',
    },
    dropdown: {
        // marginTop: 5, // Adjust this value to control the distance between the header and the dropdown
        // paddingHorizontal: 10,
        paddingBottom:0,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        // height:250,
    },
});

export default Accordion;
