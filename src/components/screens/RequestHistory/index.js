import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import MainOders from '../subscreens/LiveOderHistory';

const RequestHistory = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.headerTitle}>Orders</Text>
      <View style={styles.times}>
        <TouchableOpacity onPress={() => setActiveTab('All')}>
          <Text style={[styles.tab, activeTab === 'All' && styles.activeTab]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Live')}>
          <Text style={[styles.tab, activeTab === 'Live' && styles.activeTab]}><Entypo name='circular-graph' size={15} /> Live</Text>
        </TouchableOpacity>
      </View>
      </View>
      
      <View>
        <MainOders/>
      </View>

    </View>
  );
}

export default RequestHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
  },
  times: {
    flexDirection: 'row',
    padding: 20,
    position: 'absolute',
    top: 60,
    right: 10,
  },
  tab: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
    marginRight: 20,
    borderRadius: 25,
    color: '#000',
    fontSize: 15,
  },
  activeTab: {
    backgroundColor: 'black',
    color: 'white',
  },
});
