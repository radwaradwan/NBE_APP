import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

type Props = {
    path: any;
    isActive?: boolean;
    onPress?: () => void;
    type?:string,
};

function GridListButton(props:Props) {
    const { path, isActive, onPress,type } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, isActive ? styles.activeButton : (type === 'add' || type === 'addinempty' ? {} : styles.inactiveButton)]}
        >
            <Image source={path} style={isActive ? styles.activeIcon : (type === 'add' ? {} : (type === 'addinempty' ? styles.activeIcon : styles.inactiveIcon))} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart:2,
    },
    activeButton: {
        backgroundColor: '#007236',
    },
    inactiveButton: {
        backgroundColor: '#fff',
    },
    activeIcon: {
        tintColor:'#fff',
    },
    inactiveIcon: {
        tintColor:'gray',
    },
});

export default GridListButton;
