import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

function Map(){
    return (
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 30.05,
                    longitude: 31.35,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
            <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marker Title"
            description="Marker Description"
            />
        </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default Map;
