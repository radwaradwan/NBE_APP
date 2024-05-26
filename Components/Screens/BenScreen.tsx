import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ben from '../Organisms/Ben';
import DetailCard from '../Organisms/DetailCard';
import { BenStackParamList } from '../Types/types';
import AddBen from '../Organisms/AddBen';

const Stack = createNativeStackNavigator<BenStackParamList>();

function BenScreen() {
    return (
        <Stack.Navigator initialRouteName="Ben">
            <Stack.Screen name="Ben" component={Ben} options={{headerShown : false}}/>
            <Stack.Screen name="DetailCard" component={DetailCard} options={{headerShown : false}}/>
            <Stack.Screen name="AddBen" component={AddBen} options={{headerShown : false}}/>
        </Stack.Navigator>
    );
}

export default BenScreen;
