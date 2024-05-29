import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { theme } from '../theme/theme';
type Props = {
    navigation:any,
};
function SplashScreen(props:Props) {
    const {navigation} = props;
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('login'); // Replace 'Home' with your main screen
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style={styles.logo}>
                <Image
                    source={require('../../Assets/images/splashLogo.png')} // Replace with your logo path
                />
            </View>
            <View style={styles.Textlogo}>
                <Image
                    source={require('../../Assets/images/splashTLogo.png')} // Replace with your logo path
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:theme.BackgroundScreen,
    },
    logo: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // width: 150,
        // height: 150, // Adjust these dimensions to fit your logo
        // resizeMode: 'contain',
    },
    Textlogo:{
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom:50,
    },
});

export default SplashScreen;
