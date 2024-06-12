import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Notifications = () => {

  return (
    <View style={styles.container}>
      <View><Text style={styles.headerTitle}>Notifications</Text></View>
      <View style={styles.circle}>
        <Icon name="check" size={80} color="#4caf50" />
      </View>
      <Text style={styles.text}>No notifications yet</Text>
    </View>
  );
}

export default Notifications;

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
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 100,
  },
  text: {
    fontSize: 18,
    color: '#666',
  },
});
