const axios = require('axios');

import * as React from 'react';
import MapView, { Callout,  Marker } from 'react-native-maps';
import { View, Dimensions, StyleSheet,Text } from 'react-native';

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default function MapApp() {
  
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider='google'
      >
       
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          pinColor='green'
        >
          <Callout>
            <Text>hospitale</Text>
          </Callout>
        </Marker>
        
        <Marker
          coordinate={{
            latitude: 37.78900,
            longitude: -122.4300
          }}
          pinColor='green'
        >
          <Callout>
            <Text>hospitale</Text>
          </Callout>
        </Marker>
        
       
      </MapView>
    </View>
  );
}

