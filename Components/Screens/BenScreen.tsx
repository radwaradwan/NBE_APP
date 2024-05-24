import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ben from '../Organisms/Ben';
import DetailCard from '../Organisms/DetailCard';

const Stack = createNativeStackNavigator();

function BenScreen(){
    return (
        <Stack.Navigator initialRouteName="Ben">
            <Stack.Screen name="Ben" component={Ben} />
            <Stack.Screen name="DetailCard" component={DetailCard} />
        </Stack.Navigator>
    );
}

export default BenScreen;
