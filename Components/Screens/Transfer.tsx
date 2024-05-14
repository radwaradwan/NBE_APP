import React from 'react';
import { View} from 'react-native';
import Accordion from '../Molecules/Accordion';
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
];
function Transfer(){
    return (
        <View>
            <Accordion title="Accordion Title 1" options={data} />
            <Accordion title="Accordion Title 2" options={data} />
        </View>
    );
}

export default Transfer;
