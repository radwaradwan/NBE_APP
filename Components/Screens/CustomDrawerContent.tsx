import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

type Props = {
    navigation: any,
    state: any,
    descriptors: any,
};

function CustomDrawerContent(props: Props) {
    const { navigation, state } = props;

    return (
        <DrawerContentScrollView {...props}>
        <View>
            <Text style={styles.drawerTitle}>My App</Text>
            {state.routes.map((route: any, index: number) => (
            <DrawerItem
                key={route.key}
                label={route.name}
                onPress={() => navigation.navigate(route.name)}
                focused={state.index === index}
            />
            ))}
        </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
    },
});

export default CustomDrawerContent;
