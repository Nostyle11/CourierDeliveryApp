import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OrderList = () => {
  const navigation = useNavigation();



  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>#00000001</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Processing</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transport Service</Text>
        <View style={styles.transportServiceContainer}>
          <MaterialCommunityIcons name="truck" size={24} color="black" />
          <Text style={styles.transportServiceText}>VIP Jeoun Transport</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Locations</Text>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons name="map-marker" size={24} color="orange" />
          <Text style={styles.locationText}>Ashanti, Ayeduase</Text>
        </View>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons name="map-marker" size={24} color="orange" />
          <Text style={styles.locationText}>Greater Accra, Kasoa</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Item(s)</Text>
        <View style={styles.itemContainer}>
          <FontAwesome name="angle-right" size={24} color="black" />
          <Text style={styles.itemText}>Hp Laptop - 15cm - 2kg</Text>
        </View>
        <View style={styles.itemContainer}>
          <FontAwesome name="angle-right" size={24} color="black" />
          <Text style={styles.itemText}>Hp Laptop - 15cm - 2kg</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>15 Apr 2024 . 02.34 PM</Text>
      </View>

      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Delivery Time:</Text>
        <Text style={styles.sectionDetail}>15 - 30 mins</Text>
      </View>

      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Estimated Price:</Text>
        <Text style={styles.sectionDetail}>GH₵ 10 - 50</Text>
      </View>

      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Distance:</Text>
        <Text style={styles.sectionDetail}>12.4 Km</Text>
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Orders')}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  section2: {
    marginBottom: 20,
    flexDirection: 'row'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transportServiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transportServiceText: {
    marginLeft: 10,
    fontSize: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  sectionDetail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OrderList;
