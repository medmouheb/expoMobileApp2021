import * as React from 'react';
import MapView from 'react-native-maps';
import { View, Dimensions, StyleSheet } from 'react-native';

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
      <MapView style={styles.map} />
    </View>
  );
}

