import React from 'react';
import { View} from 'react-native';
import Accordion from '../Molecules/Accordion';

function Transfer(){
    return (
        <View>
            <Accordion title="Accordion Title 1" options={['Option 1', 'Option 2', 'Option 3']} />
            <Accordion title="Accordion Title 2" options={['Option A', 'Option B', 'Option C']} />
        </View>
    );
}

export default Transfer;
