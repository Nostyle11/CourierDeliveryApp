import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationSelectionScreen = () => {
  const [region, setRegion] = useState({
    latitude: 6.6743,
    longitude: -1.5577,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setSelectedLocation(coordinate);
    fetchLocationName(coordinate);
  };

  const fetchLocationName = async (coordinate) => {
    const { latitude, longitude } = coordinate;
    const apiKey = 'AIzaSyCIZeDQO0n4XXtYXRUUHznU4XQZ_amEmmA';
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setSelectedLocation({
          ...coordinate,
          name: data.results[0].formatted_address,
        });
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  const onPressAddress = (data, details) => {
    const lat = details.geometry.location.lat;
    const lng = details.geometry.location.lng;

    setSelectedLocation({
      latitude: lat,
      longitude: lng,
      name: details.formatted_address,
    });

    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <GooglePlacesAutocomplete
          placeholder="Enter Location"
          onPress={onPressAddress}
          fetchDetails={true}
          query={{
            key: 'AIzaSyCIZeDQO0n4XXtYXRUUHznU4XQZ_amEmmA',
            language: 'en',
            types: 'geocode', // limit results to geocoding only
            components: 'country:gh', // limit results to Ghana
          }}
          styles={{
            textInputContainer: styles.containerStyle,
            textInput: styles.textInputStyle,
          }}
          debounce={200} // Debounce time in milliseconds
        />
      </View>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}

        onPress={handleMapPress}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} />
        )}
      </MapView>

      <View style={styles.locationBox}>
        <Text style={styles.locationText}>Confirm location</Text>
        <Text style={styles.locationAddress}>
          {selectedLocation?.name || 'Select a location'}
        </Text>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LocationSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  map: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    top: 20,
    width: '100%',
    zIndex: 1,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  locationBox: {
    position: 'absolute',
    bottom: 1,
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderTopEndRadius: 10,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  locationAddress: {
    fontSize: 18,
    marginVertical: 15,
    color: 'orange',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
  },
  containerStyle: {
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInputStyle: {
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
    backgroundColor: '#e2e2e2',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
