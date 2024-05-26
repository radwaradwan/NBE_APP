import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const nbeBranches = [
    { id: 1, latitude: 30.033333, longitude: 31.233334, title: 'NBE Branch 1', description: 'Description for Branch 1' },
    { id: 2, latitude: 30.044420, longitude: 31.235712, title: 'NBE Branch 2', description: 'Description for Branch 2' },
    { id: 3, latitude: 30.052910, longitude: 31.249160, title: 'NBE Branch 3', description: 'Description for Branch 3' },
    { id: 4, latitude: 30.062630, longitude: 31.216370, title: 'NBE Branch 4', description: 'Description for Branch 4' },
    { id: 5, latitude: 30.071489, longitude: 31.211380, title: 'NBE Branch 5', description: 'Description for Branch 5' },
    { id: 6, latitude: 30.082000, longitude: 31.238000, title: 'NBE Branch 6', description: 'Description for Branch 6' },
    { id: 7, latitude: 30.096000, longitude: 31.262000, title: 'NBE Branch 7', description: 'Description for Branch 7' },
    { id: 8, latitude: 30.123000, longitude: 31.273000, title: 'NBE Branch 8', description: 'Description for Branch 8' },
    { id: 9, latitude: 30.145000, longitude: 31.287000, title: 'NBE Branch 9', description: 'Description for Branch 9' },
    { id: 10, latitude: 30.167000, longitude: 31.300000, title: 'NBE Branch 10', description: 'Description for Branch 10' },
];

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
            {nbeBranches.map(branch => (
                    <Marker
                        key={branch.id}
                        coordinate={{ latitude: branch.latitude, longitude: branch.longitude }}
                        title={branch.title}
                        description={branch.description}
                        // pinColor="#007236"
                        // image={require('../../Assets/images/atmpin.png')}
                    />
                ))}
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
