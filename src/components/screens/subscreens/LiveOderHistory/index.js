// import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const MainOders = () => {

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Feather name="shopping-bag" size={60} color="#4caf50" />
      </View>
      <Text style={styles.text}>Let's start by placing an order.</Text>
    </View>
  );
}

export default MainOders;

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 80,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 150,
  },
  text: {
    fontSize: 18,
    color: '#666',
  },
});
