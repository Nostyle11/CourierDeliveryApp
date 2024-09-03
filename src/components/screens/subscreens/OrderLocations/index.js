import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from '@react-navigation/native';

const OrderLocation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { packageType } = route.params;
  const Packtype = packageType; 
  const [contactNumber, setContactNumber] = useState(); // Example initial state

  const onPressLocation = () => {
    navigation.navigate('LocationSelectionScreen');
  }; 

  const onPressContinue = () => {
    navigation.navigate('CreateOrder', {Packtype});
  }; 

  const handleContactChange = (text) => {
    setContactNumber(text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Feather 
          name='chevron-left' 
          size={40} 
          color={'black'} 
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>{packageType}</Text>
      </View>
      <View>
        <View style={styles.lContainer}>

          <Pressable onPress={onPressLocation} style={styles.locationContainer}>
            <View style={styles.Rows}>
              <Feather name="map-pin" size={30} color="black" />
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationLabel}>Current Location</Text>
                <Text style={styles.locationText}>TPFR+YCJ, Kumasi, Ghana</Text>
              </View>
            </View>
          </Pressable>
              
          <View style={styles.locationContainer}>
            <View style={styles.Rows}>
              <Feather name="phone" size={30} color="black" />
              <TextInput
                style={styles.contactTextInput}  // Adjusted style for TextInput
                value={contactNumber}
                onChangeText={handleContactChange}
                keyboardType="phone-pad"  // Setting keyboardType to phone-pad for phone number input
                placeholder="Enter Contact Number"
              />
              <TouchableOpacity>
                <Feather name="user-plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.lContainer}>

          <View style={styles.locationContainer}>
            <View style={styles.Rows}>
              <Feather name="map-pin" size={30} color="black" />
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationLabel}>Delivery Location</Text>
                <Text style={styles.locationText}>TPFR+YCJ, Kumasi, Ghana</Text>
              </View>
            </View>
          </View>

          <View style={styles.locationContainer}>
            <View style={styles.Rows}>
              <Feather name="phone" size={30} color="black" />
              <TextInput
                style={styles.contactTextInput}  // Adjusted style for TextInput
                value={contactNumber}  // Using the same state for simplicity; you might want separate states if they should differ
                onChangeText={handleContactChange}
                keyboardType="phone-pad"  // Setting keyboardType to phone-pad for phone number input
                placeholder="Contact Number"
              />
              <TouchableOpacity>
                <Feather name="user-plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>   

        </View>
      </View>
      <TouchableOpacity onPress={onPressContinue} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default OrderLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
  },
  lContainer: {
    marginVertical: 30,
  },
  
  locationContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 40,
    alignItems: 'flex-start',
    marginBottom: 16,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  locationTextContainer: {
    marginLeft: 15,
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  locationText: {
    fontSize: 15,
    color: 'gray',
  },
  Rows: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  contactTextInput: {
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
  continueButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 40,
    top: 40,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
